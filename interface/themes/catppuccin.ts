
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const themeCatppuccin: CustomThemeConfig = {
    name: 'catppuccin',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-900)",
		"--on-secondary": "var(--color-surface-900)",
		"--on-tertiary": "var(--color-surface-900)",
		"--on-success": "var(--color-surface-900)",
		"--on-warning": "var(--color-surface-900)",
		"--on-error": "var(--color-surface-900)",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #89b4fa 
		"--color-primary-50": "237 244 254", // #edf4fe
		"--color-primary-100": "231 240 254", // #e7f0fe
		"--color-primary-200": "226 236 254", // #e2ecfe
		"--color-primary-300": "208 225 253", // #d0e1fd
		"--color-primary-400": "172 203 252", // #accbfc
		"--color-primary-500": "137 180 250", // #89b4fa
		"--color-primary-600": "123 162 225", // #7ba2e1
		"--color-primary-700": "103 135 188", // #6787bc
		"--color-primary-800": "82 108 150", // #526c96
		"--color-primary-900": "67 88 123", // #43587b
		// secondary | #94e2d5 
		"--color-secondary-50": "239 251 249", // #effbf9
		"--color-secondary-100": "234 249 247", // #eaf9f7
		"--color-secondary-200": "228 248 245", // #e4f8f5
		"--color-secondary-300": "212 243 238", // #d4f3ee
		"--color-secondary-400": "180 235 226", // #b4ebe2
		"--color-secondary-500": "148 226 213", // #94e2d5
		"--color-secondary-600": "133 203 192", // #85cbc0
		"--color-secondary-700": "111 170 160", // #6faaa0
		"--color-secondary-800": "89 136 128", // #598880
		"--color-secondary-900": "73 111 104", // #496f68
		// tertiary | #cba6f7 
		"--color-tertiary-50": "247 242 254", // #f7f2fe
		"--color-tertiary-100": "245 237 253", // #f5edfd
		"--color-tertiary-200": "242 233 253", // #f2e9fd
		"--color-tertiary-300": "234 219 252", // #eadbfc
		"--color-tertiary-400": "219 193 249", // #dbc1f9
		"--color-tertiary-500": "203 166 247", // #cba6f7
		"--color-tertiary-600": "183 149 222", // #b795de
		"--color-tertiary-700": "152 125 185", // #987db9
		"--color-tertiary-800": "122 100 148", // #7a6494
		"--color-tertiary-900": "99 81 121", // #635179
		// success | #a6e3a1 
		"--color-success-50": "242 251 241", // #f2fbf1
		"--color-success-100": "237 249 236", // #edf9ec
		"--color-success-200": "233 248 232", // #e9f8e8
		"--color-success-300": "219 244 217", // #dbf4d9
		"--color-success-400": "193 235 189", // #c1ebbd
		"--color-success-500": "166 227 161", // #a6e3a1
		"--color-success-600": "149 204 145", // #95cc91
		"--color-success-700": "125 170 121", // #7daa79
		"--color-success-800": "100 136 97", // #648861
		"--color-success-900": "81 111 79", // #516f4f
		// warning | #f9e2af 
		"--color-warning-50": "254 251 243", // #fefbf3
		"--color-warning-100": "254 249 239", // #fef9ef
		"--color-warning-200": "254 248 235", // #fef8eb
		"--color-warning-300": "253 243 223", // #fdf3df
		"--color-warning-400": "251 235 199", // #fbebc7
		"--color-warning-500": "249 226 175", // #f9e2af
		"--color-warning-600": "224 203 158", // #e0cb9e
		"--color-warning-700": "187 170 131", // #bbaa83
		"--color-warning-800": "149 136 105", // #958869
		"--color-warning-900": "122 111 86", // #7a6f56
		// error | #f38ba8 
		"--color-error-50": "253 238 242", // #fdeef2
		"--color-error-100": "253 232 238", // #fde8ee
		"--color-error-200": "252 226 233", // #fce2e9
		"--color-error-300": "250 209 220", // #fad1dc
		"--color-error-400": "247 174 194", // #f7aec2
		"--color-error-500": "243 139 168", // #f38ba8
		"--color-error-600": "219 125 151", // #db7d97
		"--color-error-700": "182 104 126", // #b6687e
		"--color-error-800": "146 83 101", // #925365
		"--color-error-900": "119 68 82", // #774452
		// surface | #1e1e2e 
		"--color-surface-50": "221 221 224", // #dddde0
		"--color-surface-100": "210 210 213", // #d2d2d5
		"--color-surface-200": "199 199 203", // #c7c7cb
		"--color-surface-300": "165 165 171", // #a5a5ab
		"--color-surface-400": "98 98 109", // #62626d
		"--color-surface-500": "30 30 46", // #1e1e2e
		"--color-surface-600": "27 27 41", // #1b1b29
		"--color-surface-700": "23 23 35", // #171723
		"--color-surface-800": "18 18 28", // #12121c
		"--color-surface-900": "15 15 23", // #0f0f17
		
	}
}