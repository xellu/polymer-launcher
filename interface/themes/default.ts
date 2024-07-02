
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const themeDark: CustomThemeConfig = {
    name: 'dark',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"Inter", sans-serif`,
		"--theme-font-family-heading": `"Inter", sans-serif	`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-900)",
		"--on-secondary": "var(--color-surface-900)",
		"--on-tertiary": "255 255 255",
		"--on-success": "var(--color-surface-900)",
		"--on-warning": "var(--color-surface-900)",
		"--on-error": "var(--color-surface-900)",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #31A8FF 
		"--color-primary-50": "224 242 255", // #e0f2ff
		"--color-primary-100": "214 238 255", // #d6eeff
		"--color-primary-200": "204 233 255", // #cce9ff
		"--color-primary-300": "173 220 255", // #addcff
		"--color-primary-400": "111 194 255", // #6fc2ff
		"--color-primary-500": "49 168 255", // #31A8FF
		"--color-primary-600": "44 151 230", // #2c97e6
		"--color-primary-700": "37 126 191", // #257ebf
		"--color-primary-800": "29 101 153", // #1d6599
		"--color-primary-900": "24 82 125", // #18527d
		// secondary | #31ffe0 
		"--color-secondary-50": "224 255 250", // #e0fffa
		"--color-secondary-100": "214 255 249", // #d6fff9
		"--color-secondary-200": "204 255 247", // #ccfff7
		"--color-secondary-300": "173 255 243", // #adfff3
		"--color-secondary-400": "111 255 233", // #6fffe9
		"--color-secondary-500": "49 255 224", // #31ffe0
		"--color-secondary-600": "44 230 202", // #2ce6ca
		"--color-secondary-700": "37 191 168", // #25bfa8
		"--color-secondary-800": "29 153 134", // #1d9986
		"--color-secondary-900": "24 125 110", // #187d6e
		// tertiary | #9b40ff 
		"--color-tertiary-50": "240 226 255", // #f0e2ff
		"--color-tertiary-100": "235 217 255", // #ebd9ff
		"--color-tertiary-200": "230 207 255", // #e6cfff
		"--color-tertiary-300": "215 179 255", // #d7b3ff
		"--color-tertiary-400": "185 121 255", // #b979ff
		"--color-tertiary-500": "155 64 255", // #9b40ff
		"--color-tertiary-600": "140 58 230", // #8c3ae6
		"--color-tertiary-700": "116 48 191", // #7430bf
		"--color-tertiary-800": "93 38 153", // #5d2699
		"--color-tertiary-900": "76 31 125", // #4c1f7d
		// success | #18fe80 
		"--color-success-50": "220 255 236", // #dcffec
		"--color-success-100": "209 255 230", // #d1ffe6
		"--color-success-200": "197 255 223", // #c5ffdf
		"--color-success-300": "163 255 204", // #a3ffcc
		"--color-success-400": "93 254 166", // #5dfea6
		"--color-success-500": "24 254 128", // #18fe80
		"--color-success-600": "22 229 115", // #16e573
		"--color-success-700": "18 191 96", // #12bf60
		"--color-success-800": "14 152 77", // #0e984d
		"--color-success-900": "12 124 63", // #0c7c3f
		// warning | #ffd555 
		"--color-warning-50": "255 249 230", // #fff9e6
		"--color-warning-100": "255 247 221", // #fff7dd
		"--color-warning-200": "255 245 213", // #fff5d5
		"--color-warning-300": "255 238 187", // #ffeebb
		"--color-warning-400": "255 226 136", // #ffe288
		"--color-warning-500": "255 213 85", // #ffd555
		"--color-warning-600": "230 192 77", // #e6c04d
		"--color-warning-700": "191 160 64", // #bfa040
		"--color-warning-800": "153 128 51", // #998033
		"--color-warning-900": "125 104 42", // #7d682a
		// error | #ff5959 
		"--color-error-50": "255 230 230", // #ffe6e6
		"--color-error-100": "255 222 222", // #ffdede
		"--color-error-200": "255 214 214", // #ffd6d6
		"--color-error-300": "255 189 189", // #ffbdbd
		"--color-error-400": "255 139 139", // #ff8b8b
		"--color-error-500": "255 89 89", // #ff5959
		"--color-error-600": "230 80 80", // #e65050
		"--color-error-700": "191 67 67", // #bf4343
		"--color-error-800": "153 53 53", // #993535
		"--color-error-900": "125 44 44", // #7d2c2c
		// surface | #0c1e32 
		"--color-surface-50": "219 221 224", // #dbdde0
		"--color-surface-100": "206 210 214", // #ced2d6
		"--color-surface-200": "194 199 204", // #c2c7cc
		"--color-surface-300": "158 165 173", // #9ea5ad
		"--color-surface-400": "85 98 112", // #556270
		"--color-surface-500": "12 30 50", // #0c1e32
		"--color-surface-600": "11 27 45", // #0b1b2d
		"--color-surface-700": "9 23 38", // #091726
		"--color-surface-800": "7 18 30", // #07121e
		"--color-surface-900": "6 15 25", // #060f19
		
	}
}

export const themeLight: CustomThemeConfig = {
	name: "light",
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"Inter", sans-serif`,
		"--theme-font-family-heading": `"Inter", sans-serif	`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #31A8FF 
		"--color-primary-50": "224 242 255", // #e0f2ff
		"--color-primary-100": "214 238 255", // #d6eeff
		"--color-primary-200": "204 233 255", // #cce9ff
		"--color-primary-300": "173 220 255", // #addcff
		"--color-primary-400": "111 194 255", // #6fc2ff
		"--color-primary-500": "49 168 255", // #31A8FF
		"--color-primary-600": "44 151 230", // #2c97e6
		"--color-primary-700": "37 126 191", // #257ebf
		"--color-primary-800": "29 101 153", // #1d6599
		"--color-primary-900": "24 82 125", // #18527d
		// secondary | #31ffe0 
		"--color-secondary-50": "224 255 250", // #e0fffa
		"--color-secondary-100": "214 255 249", // #d6fff9
		"--color-secondary-200": "204 255 247", // #ccfff7
		"--color-secondary-300": "173 255 243", // #adfff3
		"--color-secondary-400": "111 255 233", // #6fffe9
		"--color-secondary-500": "49 255 224", // #31ffe0
		"--color-secondary-600": "44 230 202", // #2ce6ca
		"--color-secondary-700": "37 191 168", // #25bfa8
		"--color-secondary-800": "29 153 134", // #1d9986
		"--color-secondary-900": "24 125 110", // #187d6e
		// tertiary | #9b40ff 
		"--color-tertiary-50": "240 226 255", // #f0e2ff
		"--color-tertiary-100": "235 217 255", // #ebd9ff
		"--color-tertiary-200": "230 207 255", // #e6cfff
		"--color-tertiary-300": "215 179 255", // #d7b3ff
		"--color-tertiary-400": "185 121 255", // #b979ff
		"--color-tertiary-500": "155 64 255", // #9b40ff
		"--color-tertiary-600": "140 58 230", // #8c3ae6
		"--color-tertiary-700": "116 48 191", // #7430bf
		"--color-tertiary-800": "93 38 153", // #5d2699
		"--color-tertiary-900": "76 31 125", // #4c1f7d
		// success | #18fe80 
		"--color-success-50": "220 255 236", // #dcffec
		"--color-success-100": "209 255 230", // #d1ffe6
		"--color-success-200": "197 255 223", // #c5ffdf
		"--color-success-300": "163 255 204", // #a3ffcc
		"--color-success-400": "93 254 166", // #5dfea6
		"--color-success-500": "24 254 128", // #18fe80
		"--color-success-600": "22 229 115", // #16e573
		"--color-success-700": "18 191 96", // #12bf60
		"--color-success-800": "14 152 77", // #0e984d
		"--color-success-900": "12 124 63", // #0c7c3f
		// warning | #ffd555 
		"--color-warning-50": "255 249 230", // #fff9e6
		"--color-warning-100": "255 247 221", // #fff7dd
		"--color-warning-200": "255 245 213", // #fff5d5
		"--color-warning-300": "255 238 187", // #ffeebb
		"--color-warning-400": "255 226 136", // #ffe288
		"--color-warning-500": "255 213 85", // #ffd555
		"--color-warning-600": "230 192 77", // #e6c04d
		"--color-warning-700": "191 160 64", // #bfa040
		"--color-warning-800": "153 128 51", // #998033
		"--color-warning-900": "125 104 42", // #7d682a
		// error | #ff5959 
		"--color-error-50": "255 230 230", // #ffe6e6
		"--color-error-100": "255 222 222", // #ffdede
		"--color-error-200": "255 214 214", // #ffd6d6
		"--color-error-300": "255 189 189", // #ffbdbd
		"--color-error-400": "255 139 139", // #ff8b8b
		"--color-error-500": "255 89 89", // #ff5959
		"--color-error-600": "230 80 80", // #e65050
		"--color-error-700": "191 67 67", // #bf4343
		"--color-error-800": "153 53 53", // #993535
		"--color-error-900": "125 44 44", // #7d2c2c
		// surface | #4d8dd5 
		"--color-surface-50": "228 238 249", // #e4eef9
		"--color-surface-100": "219 232 247", // #dbe8f7
		"--color-surface-200": "211 227 245", // #d3e3f5
		"--color-surface-300": "184 209 238", // #b8d1ee
		"--color-surface-400": "130 175 226", // #82afe2
		"--color-surface-500": "77 141 213", // #4d8dd5
		"--color-surface-600": "69 127 192", // #457fc0
		"--color-surface-700": "58 106 160", // #3a6aa0
		"--color-surface-800": "46 85 128", // #2e5580
		"--color-surface-900": "38 69 104", // #264568
		
	}
}