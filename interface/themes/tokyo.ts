
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const themeTokyoNight: CustomThemeConfig = {
    name: 'tokyo-night',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"Inter", sans-serif`,
		"--theme-font-family-heading": `"Inter", sans-serif	`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7aa2f7 
		"--color-primary-50": "235 241 254", // #ebf1fe
		"--color-primary-100": "228 236 253", // #e4ecfd
		"--color-primary-200": "222 232 253", // #dee8fd
		"--color-primary-300": "202 218 252", // #cadafc
		"--color-primary-400": "162 190 249", // #a2bef9
		"--color-primary-500": "122 162 247", // #7aa2f7
		"--color-primary-600": "110 146 222", // #6e92de
		"--color-primary-700": "92 122 185", // #5c7ab9
		"--color-primary-800": "73 97 148", // #496194
		"--color-primary-900": "60 79 121", // #3c4f79
		// secondary | #73daca 
		"--color-secondary-50": "234 249 247", // #eaf9f7
		"--color-secondary-100": "227 248 244", // #e3f8f4
		"--color-secondary-200": "220 246 242", // #dcf6f2
		"--color-secondary-300": "199 240 234", // #c7f0ea
		"--color-secondary-400": "157 229 218", // #9de5da
		"--color-secondary-500": "115 218 202", // #73daca
		"--color-secondary-600": "104 196 182", // #68c4b6
		"--color-secondary-700": "86 164 152", // #56a498
		"--color-secondary-800": "69 131 121", // #458379
		"--color-secondary-900": "56 107 99", // #386b63
		// tertiary | #bb9af7 
		"--color-tertiary-50": "245 240 254", // #f5f0fe
		"--color-tertiary-100": "241 235 253", // #f1ebfd
		"--color-tertiary-200": "238 230 253", // #eee6fd
		"--color-tertiary-300": "228 215 252", // #e4d7fc
		"--color-tertiary-400": "207 184 249", // #cfb8f9
		"--color-tertiary-500": "187 154 247", // #bb9af7
		"--color-tertiary-600": "168 139 222", // #a88bde
		"--color-tertiary-700": "140 116 185", // #8c74b9
		"--color-tertiary-800": "112 92 148", // #705c94
		"--color-tertiary-900": "92 75 121", // #5c4b79
		// success | #9ece6a 
		"--color-success-50": "240 248 233", // #f0f8e9
		"--color-success-100": "236 245 225", // #ecf5e1
		"--color-success-200": "231 243 218", // #e7f3da
		"--color-success-300": "216 235 195", // #d8ebc3
		"--color-success-400": "187 221 151", // #bbdd97
		"--color-success-500": "158 206 106", // #9ece6a
		"--color-success-600": "142 185 95", // #8eb95f
		"--color-success-700": "119 155 80", // #779b50
		"--color-success-800": "95 124 64", // #5f7c40
		"--color-success-900": "77 101 52", // #4d6534
		// warning | #e0af68 
		"--color-warning-50": "250 243 232", // #faf3e8
		"--color-warning-100": "249 239 225", // #f9efe1
		"--color-warning-200": "247 235 217", // #f7ebd9
		"--color-warning-300": "243 223 195", // #f3dfc3
		"--color-warning-400": "233 199 149", // #e9c795
		"--color-warning-500": "224 175 104", // #e0af68
		"--color-warning-600": "202 158 94", // #ca9e5e
		"--color-warning-700": "168 131 78", // #a8834e
		"--color-warning-800": "134 105 62", // #86693e
		"--color-warning-900": "110 86 51", // #6e5633
		// error | #f7768e 
		"--color-error-50": "254 234 238", // #feeaee
		"--color-error-100": "253 228 232", // #fde4e8
		"--color-error-200": "253 221 227", // #fddde3
		"--color-error-300": "252 200 210", // #fcc8d2
		"--color-error-400": "249 159 176", // #f99fb0
		"--color-error-500": "247 118 142", // #f7768e
		"--color-error-600": "222 106 128", // #de6a80
		"--color-error-700": "185 89 107", // #b9596b
		"--color-error-800": "148 71 85", // #944755
		"--color-error-900": "121 58 70", // #793a46
		// surface | #1a1b26 
		"--color-surface-50": "221 221 222", // #ddddde
		"--color-surface-100": "209 209 212", // #d1d1d4
		"--color-surface-200": "198 198 201", // #c6c6c9
		"--color-surface-300": "163 164 168", // #a3a4a8
		"--color-surface-400": "95 95 103", // #5f5f67
		"--color-surface-500": "26 27 38", // #1a1b26
		"--color-surface-600": "23 24 34", // #171822
		"--color-surface-700": "20 20 29", // #14141d
		"--color-surface-800": "16 16 23", // #101017
		"--color-surface-900": "13 13 19", // #0d0d13
		
	}
}

export const themeTokyoStorm: CustomThemeConfig = {
    name: 'tokyo-storm',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"Inter", sans-serif`,
		"--theme-font-family-heading": `"Inter", sans-serif	`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7aa2f7 
		"--color-primary-50": "235 241 254", // #ebf1fe
		"--color-primary-100": "228 236 253", // #e4ecfd
		"--color-primary-200": "222 232 253", // #dee8fd
		"--color-primary-300": "202 218 252", // #cadafc
		"--color-primary-400": "162 190 249", // #a2bef9
		"--color-primary-500": "122 162 247", // #7aa2f7
		"--color-primary-600": "110 146 222", // #6e92de
		"--color-primary-700": "92 122 185", // #5c7ab9
		"--color-primary-800": "73 97 148", // #496194
		"--color-primary-900": "60 79 121", // #3c4f79
		// secondary | #73daca 
		"--color-secondary-50": "234 249 247", // #eaf9f7
		"--color-secondary-100": "227 248 244", // #e3f8f4
		"--color-secondary-200": "220 246 242", // #dcf6f2
		"--color-secondary-300": "199 240 234", // #c7f0ea
		"--color-secondary-400": "157 229 218", // #9de5da
		"--color-secondary-500": "115 218 202", // #73daca
		"--color-secondary-600": "104 196 182", // #68c4b6
		"--color-secondary-700": "86 164 152", // #56a498
		"--color-secondary-800": "69 131 121", // #458379
		"--color-secondary-900": "56 107 99", // #386b63
		// tertiary | #bb9af7 
		"--color-tertiary-50": "245 240 254", // #f5f0fe
		"--color-tertiary-100": "241 235 253", // #f1ebfd
		"--color-tertiary-200": "238 230 253", // #eee6fd
		"--color-tertiary-300": "228 215 252", // #e4d7fc
		"--color-tertiary-400": "207 184 249", // #cfb8f9
		"--color-tertiary-500": "187 154 247", // #bb9af7
		"--color-tertiary-600": "168 139 222", // #a88bde
		"--color-tertiary-700": "140 116 185", // #8c74b9
		"--color-tertiary-800": "112 92 148", // #705c94
		"--color-tertiary-900": "92 75 121", // #5c4b79
		// success | #9ece6a 
		"--color-success-50": "240 248 233", // #f0f8e9
		"--color-success-100": "236 245 225", // #ecf5e1
		"--color-success-200": "231 243 218", // #e7f3da
		"--color-success-300": "216 235 195", // #d8ebc3
		"--color-success-400": "187 221 151", // #bbdd97
		"--color-success-500": "158 206 106", // #9ece6a
		"--color-success-600": "142 185 95", // #8eb95f
		"--color-success-700": "119 155 80", // #779b50
		"--color-success-800": "95 124 64", // #5f7c40
		"--color-success-900": "77 101 52", // #4d6534
		// warning | #e0af68 
		"--color-warning-50": "250 243 232", // #faf3e8
		"--color-warning-100": "249 239 225", // #f9efe1
		"--color-warning-200": "247 235 217", // #f7ebd9
		"--color-warning-300": "243 223 195", // #f3dfc3
		"--color-warning-400": "233 199 149", // #e9c795
		"--color-warning-500": "224 175 104", // #e0af68
		"--color-warning-600": "202 158 94", // #ca9e5e
		"--color-warning-700": "168 131 78", // #a8834e
		"--color-warning-800": "134 105 62", // #86693e
		"--color-warning-900": "110 86 51", // #6e5633
		// error | #f7768e 
		"--color-error-50": "254 234 238", // #feeaee
		"--color-error-100": "253 228 232", // #fde4e8
		"--color-error-200": "253 221 227", // #fddde3
		"--color-error-300": "252 200 210", // #fcc8d2
		"--color-error-400": "249 159 176", // #f99fb0
		"--color-error-500": "247 118 142", // #f7768e
		"--color-error-600": "222 106 128", // #de6a80
		"--color-error-700": "185 89 107", // #b9596b
		"--color-error-800": "148 71 85", // #944755
		"--color-error-900": "121 58 70", // #793a46
		// surface | #24283b 
		"--color-surface-50": "222 223 226", // #dedfe2
		"--color-surface-100": "211 212 216", // #d3d4d8
		"--color-surface-200": "200 201 206", // #c8c9ce
		"--color-surface-300": "167 169 177", // #a7a9b1
		"--color-surface-400": "102 105 118", // #666976
		"--color-surface-500": "36 40 59", // #24283b
		"--color-surface-600": "32 36 53", // #202435
		"--color-surface-700": "27 30 44", // #1b1e2c
		"--color-surface-800": "22 24 35", // #161823
		"--color-surface-900": "18 20 29", // #12141d
		
	}
}