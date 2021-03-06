import * as React from 'react';
import { SchemeCase, AppState, GroupEntry, GroupConfig } from './typings';
import { MatchResult, match as fuzzyMatch } from 'fuzzy';
import { useAppStore } from './store/store';
import marked from 'marked';

export function getGroupEntryKey(entry: GroupEntry) {
	let key = entry.name;
	
	if (entry.scheme && entry.scheme.project) {
		key = `${entry.scheme.project}${key}`;
	}

	return key;
}

export function copyToClipboard(val: string) {
	const el = document.createElement('textarea');
	el.value = val;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	
	document.body.appendChild(el);

	const selection = document.getSelection()
	const currentRanges = [] as Range[];

	if (selection) {
		for (let i = 0; i < (selection.rangeCount || 0); i++) {
			currentRanges.push(selection.getRangeAt(i));
		}
	}

	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	
	if (currentRanges.length) { 
		const selection = document.getSelection()
		if (selection) {
			selection.removeAllRanges();
			currentRanges.forEach(range => {
				selection.addRange(range);
			});
		}
	}
}

export function useNav() {
	const { updateState } = useAppStore();
	const nav = React.useCallback((val) => {
		updateState({
			search: '',
			queryString: '',	
		})
		window.location.hash = val;
	}, [updateState]);
	
	return nav;
}

const fuzzyMemo = {} as {
	[value:string]: {
		[pattern:string]: MatchResult;
	}
};

export function fuzzyHL(value: string, pattern: string) {
	if (fuzzyMemo[value] === void 0) {
		fuzzyMemo[value] = {};
	}

	if (fuzzyMemo[value][pattern] === void 0) {
		fuzzyMemo[value][pattern] = fuzzyMatch(pattern, value, {
			pre: '<span style="background: yellow;">',
			post: '</span>',
		});
	}

	const result = fuzzyMemo[value][pattern];
	return result ? <span dangerouslySetInnerHTML={{__html: result.rendered}}/> : null;
}

export function getBaseURL(group: GroupConfig, entry?: GroupEntry) {
	return `#${group.id}${entry ? `:${entry.scheme?.project || ''}${entry.name}` : ``}`;
}

export function getCaseURL(group: GroupConfig, entry: GroupEntry, c: SchemeCase) {
	return `${getBaseURL(group, entry)}?case=${c.name}`;
}

const rDocLocation = /^\/godraft:doc[a-z]+(\/api\/[^?#]+)/;

export function parseHistoryParams(state: AppState, checkPath?: boolean) {
	if (checkPath) {
		const parsed = window.location.pathname.match(rDocLocation);
		if (parsed) {
			window.history.pushState(null, '', '/godraft:docs/');
			return {
				activeEndpoint: parsed[1],
			};
		}
	}


	const [
		_,
		id,
		endpoint,
		queryString,
	] = window.location.hash.match(/^#?([\w-]+)(?::([^?]+))?(?:\?(.*))?/i) || [];

	return {
		activeGroup: state.groups[id] ? id : Object.keys(state.groups)[0],
		activeEndpoint: endpoint || '',
		queryString: queryString || '',
	};
}

export function toMapById<T>(list: {[id:string]: any}[]): T {
	return list.reduce((map, item) => {
		map[item.id] = item;
		return map;
	}, {}) as T;
}

export function markdown(value:string) {
	let indent = null as RegExp | null | false;
	const prepared = value
		.replace(/^\s*\n/, '')
		.split('\n')
			.map(line => {
				if (indent === null) {
					const m = line.match(/^\s+/);
					indent = m ? new RegExp(`^${m[0]}`) : false;
				}

				return indent ? line.replace(indent!, '') : line;
			})
			.join('\n')
	;
	
	return marked(prepared);
}
