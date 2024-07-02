
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const themeCatppuccinMocha: CustomThemeConfig = {
    name: 'catppuccin-mocha',
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

export const themeCatppuccinMacchiato: CustomThemeConfig = {
	name: 'catppuccin-macchiato',
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
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8aadf4 
		"--color-primary-50": "237 243 253", // #edf3fd
		"--color-primary-100": "232 239 253", // #e8effd
		"--color-primary-200": "226 235 252", // #e2ebfc
		"--color-primary-300": "208 222 251", // #d0defb
		"--color-primary-400": "173 198 247", // #adc6f7
		"--color-primary-500": "138 173 244", // #8aadf4
		"--color-primary-600": "124 156 220", // #7c9cdc
		"--color-primary-700": "104 130 183", // #6882b7
		"--color-primary-800": "83 104 146", // #536892
		"--color-primary-900": "68 85 120", // #445578
		// secondary | #8bd5ca 
		"--color-secondary-50": "238 249 247", // #eef9f7
		"--color-secondary-100": "232 247 244", // #e8f7f4
		"--color-secondary-200": "226 245 242", // #e2f5f2
		"--color-secondary-300": "209 238 234", // #d1eeea
		"--color-secondary-400": "174 226 218", // #aee2da
		"--color-secondary-500": "139 213 202", // #8bd5ca
		"--color-secondary-600": "125 192 182", // #7dc0b6
		"--color-secondary-700": "104 160 152", // #68a098
		"--color-secondary-800": "83 128 121", // #538079
		"--color-secondary-900": "68 104 99", // #446863
		// tertiary | #c6a0f6 
		"--color-tertiary-50": "246 241 254", // #f6f1fe
		"--color-tertiary-100": "244 236 253", // #f4ecfd
		"--color-tertiary-200": "241 231 253", // #f1e7fd
		"--color-tertiary-300": "232 217 251", // #e8d9fb
		"--color-tertiary-400": "215 189 249", // #d7bdf9
		"--color-tertiary-500": "198 160 246", // #c6a0f6
		"--color-tertiary-600": "178 144 221", // #b290dd
		"--color-tertiary-700": "149 120 185", // #9578b9
		"--color-tertiary-800": "119 96 148", // #776094
		"--color-tertiary-900": "97 78 121", // #614e79
		// success | #a6da95 
		"--color-success-50": "242 249 239", // #f2f9ef
		"--color-success-100": "237 248 234", // #edf8ea
		"--color-success-200": "233 246 229", // #e9f6e5
		"--color-success-300": "219 240 213", // #dbf0d5
		"--color-success-400": "193 229 181", // #c1e5b5
		"--color-success-500": "166 218 149", // #a6da95
		"--color-success-600": "149 196 134", // #95c486
		"--color-success-700": "125 164 112", // #7da470
		"--color-success-800": "100 131 89", // #648359
		"--color-success-900": "81 107 73", // #516b49
		// warning | #eed49f 
		"--color-warning-50": "252 249 241", // #fcf9f1
		"--color-warning-100": "252 246 236", // #fcf6ec
		"--color-warning-200": "251 244 231", // #fbf4e7
		"--color-warning-300": "248 238 217", // #f8eed9
		"--color-warning-400": "243 225 188", // #f3e1bc
		"--color-warning-500": "238 212 159", // #eed49f
		"--color-warning-600": "214 191 143", // #d6bf8f
		"--color-warning-700": "179 159 119", // #b39f77
		"--color-warning-800": "143 127 95", // #8f7f5f
		"--color-warning-900": "117 104 78", // #75684e
		// error | #ed8796 
		"--color-error-50": "252 237 239", // #fcedef
		"--color-error-100": "251 231 234", // #fbe7ea
		"--color-error-200": "251 225 229", // #fbe1e5
		"--color-error-300": "248 207 213", // #f8cfd5
		"--color-error-400": "242 171 182", // #f2abb6
		"--color-error-500": "237 135 150", // #ed8796
		"--color-error-600": "213 122 135", // #d57a87
		"--color-error-700": "178 101 113", // #b26571
		"--color-error-800": "142 81 90", // #8e515a
		"--color-error-900": "116 66 74", // #74424a
		// surface | #24273a 
		"--color-surface-50": "222 223 225", // #dedfe1
		"--color-surface-100": "211 212 216", // #d3d4d8
		"--color-surface-200": "200 201 206", // #c8c9ce
		"--color-surface-300": "167 169 176", // #a7a9b0
		"--color-surface-400": "102 104 117", // #666875
		"--color-surface-500": "36 39 58", // #24273a
		"--color-surface-600": "32 35 52", // #202334
		"--color-surface-700": "27 29 44", // #1b1d2c
		"--color-surface-800": "22 23 35", // #161723
		"--color-surface-900": "18 19 28", // #12131c
		
	}
}

export const themeCatppuccinFrappe: CustomThemeConfig = {
	name: 'catppuccin-frappe',
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
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8caaee 
		"--color-primary-50": "238 242 252", // #eef2fc
		"--color-primary-100": "232 238 252", // #e8eefc
		"--color-primary-200": "226 234 251", // #e2eafb
		"--color-primary-300": "209 221 248", // #d1ddf8
		"--color-primary-400": "175 196 243", // #afc4f3
		"--color-primary-500": "140 170 238", // #8caaee
		"--color-primary-600": "126 153 214", // #7e99d6
		"--color-primary-700": "105 128 179", // #6980b3
		"--color-primary-800": "84 102 143", // #54668f
		"--color-primary-900": "69 83 117", // #455375
		// secondary | #81c8be 
		"--color-secondary-50": "236 247 245", // #ecf7f5
		"--color-secondary-100": "230 244 242", // #e6f4f2
		"--color-secondary-200": "224 241 239", // #e0f1ef
		"--color-secondary-300": "205 233 229", // #cde9e5
		"--color-secondary-400": "167 217 210", // #a7d9d2
		"--color-secondary-500": "129 200 190", // #81c8be
		"--color-secondary-600": "116 180 171", // #74b4ab
		"--color-secondary-700": "97 150 143", // #61968f
		"--color-secondary-800": "77 120 114", // #4d7872
		"--color-secondary-900": "63 98 93", // #3f625d
		// tertiary | #ca9ee6 
		"--color-tertiary-50": "247 240 251", // #f7f0fb
		"--color-tertiary-100": "244 236 250", // #f4ecfa
		"--color-tertiary-200": "242 231 249", // #f2e7f9
		"--color-tertiary-300": "234 216 245", // #ead8f5
		"--color-tertiary-400": "218 187 238", // #dabbee
		"--color-tertiary-500": "202 158 230", // #ca9ee6
		"--color-tertiary-600": "182 142 207", // #b68ecf
		"--color-tertiary-700": "152 119 173", // #9877ad
		"--color-tertiary-800": "121 95 138", // #795f8a
		"--color-tertiary-900": "99 77 113", // #634d71
		// success | #a6d189 
		"--color-success-50": "242 248 237", // #f2f8ed
		"--color-success-100": "237 246 231", // #edf6e7
		"--color-success-200": "233 244 226", // #e9f4e2
		"--color-success-300": "219 237 208", // #dbedd0
		"--color-success-400": "193 223 172", // #c1dfac
		"--color-success-500": "166 209 137", // #a6d189
		"--color-success-600": "149 188 123", // #95bc7b
		"--color-success-700": "125 157 103", // #7d9d67
		"--color-success-800": "100 125 82", // #647d52
		"--color-success-900": "81 102 67", // #516643
		// warning | #e5c890 
		"--color-warning-50": "251 247 238", // #fbf7ee
		"--color-warning-100": "250 244 233", // #faf4e9
		"--color-warning-200": "249 241 227", // #f9f1e3
		"--color-warning-300": "245 233 211", // #f5e9d3
		"--color-warning-400": "237 217 177", // #edd9b1
		"--color-warning-500": "229 200 144", // #e5c890
		"--color-warning-600": "206 180 130", // #ceb482
		"--color-warning-700": "172 150 108", // #ac966c
		"--color-warning-800": "137 120 86", // #897856
		"--color-warning-900": "112 98 71", // #706247
		// error | #e78284 
		"--color-error-50": "251 236 237", // #fbeced
		"--color-error-100": "250 230 230", // #fae6e6
		"--color-error-200": "249 224 224", // #f9e0e0
		"--color-error-300": "245 205 206", // #f5cdce
		"--color-error-400": "238 168 169", // #eea8a9
		"--color-error-500": "231 130 132", // #e78284
		"--color-error-600": "208 117 119", // #d07577
		"--color-error-700": "173 98 99", // #ad6263
		"--color-error-800": "139 78 79", // #8b4e4f
		"--color-error-900": "113 64 65", // #714041
		// surface | #303446 
		"--color-surface-50": "224 225 227", // #e0e1e3
		"--color-surface-100": "214 214 218", // #d6d6da
		"--color-surface-200": "203 204 209", // #cbccd1
		"--color-surface-300": "172 174 181", // #acaeb5
		"--color-surface-400": "110 113 126", // #6e717e
		"--color-surface-500": "48 52 70", // #303446
		"--color-surface-600": "43 47 63", // #2b2f3f
		"--color-surface-700": "36 39 53", // #242735
		"--color-surface-800": "29 31 42", // #1d1f2a
		"--color-surface-900": "24 25 34", // #181922
		
	}
}

export const themeCatppuccinLatte: CustomThemeConfig = {
	name: 'catppuccin-latte',
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
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #1e66f5 
		"--color-primary-50": "221 232 254", // #dde8fe
		"--color-primary-100": "210 224 253", // #d2e0fd
		"--color-primary-200": "199 217 253", // #c7d9fd
		"--color-primary-300": "165 194 251", // #a5c2fb
		"--color-primary-400": "98 148 248", // #6294f8
		"--color-primary-500": "30 102 245", // #1e66f5
		"--color-primary-600": "27 92 221", // #1b5cdd
		"--color-primary-700": "23 77 184", // #174db8
		"--color-primary-800": "18 61 147", // #123d93
		"--color-primary-900": "15 50 120", // #0f3278
		// secondary | #179299 
		"--color-secondary-50": "220 239 240", // #dceff0
		"--color-secondary-100": "209 233 235", // #d1e9eb
		"--color-secondary-200": "197 228 230", // #c5e4e6
		"--color-secondary-300": "162 211 214", // #a2d3d6
		"--color-secondary-400": "93 179 184", // #5db3b8
		"--color-secondary-500": "23 146 153", // #179299
		"--color-secondary-600": "21 131 138", // #15838a
		"--color-secondary-700": "17 110 115", // #116e73
		"--color-secondary-800": "14 88 92", // #0e585c
		"--color-secondary-900": "11 72 75", // #0b484b
		// tertiary | #8839ef 
		"--color-tertiary-50": "237 225 253", // #ede1fd
		"--color-tertiary-100": "231 215 252", // #e7d7fc
		"--color-tertiary-200": "225 206 251", // #e1cefb
		"--color-tertiary-300": "207 176 249", // #cfb0f9
		"--color-tertiary-400": "172 116 244", // #ac74f4
		"--color-tertiary-500": "136 57 239", // #8839ef
		"--color-tertiary-600": "122 51 215", // #7a33d7
		"--color-tertiary-700": "102 43 179", // #662bb3
		"--color-tertiary-800": "82 34 143", // #52228f
		"--color-tertiary-900": "67 28 117", // #431c75
		// success | #40a02b 
		"--color-success-50": "226 241 223", // #e2f1df
		"--color-success-100": "217 236 213", // #d9ecd5
		"--color-success-200": "207 231 202", // #cfe7ca
		"--color-success-300": "179 217 170", // #b3d9aa
		"--color-success-400": "121 189 107", // #79bd6b
		"--color-success-500": "64 160 43", // #40a02b
		"--color-success-600": "58 144 39", // #3a9027
		"--color-success-700": "48 120 32", // #307820
		"--color-success-800": "38 96 26", // #26601a
		"--color-success-900": "31 78 21", // #1f4e15
		// warning | #df8e1d 
		"--color-warning-50": "250 238 221", // #faeedd
		"--color-warning-100": "249 232 210", // #f9e8d2
		"--color-warning-200": "247 227 199", // #f7e3c7
		"--color-warning-300": "242 210 165", // #f2d2a5
		"--color-warning-400": "233 176 97", // #e9b061
		"--color-warning-500": "223 142 29", // #df8e1d
		"--color-warning-600": "201 128 26", // #c9801a
		"--color-warning-700": "167 107 22", // #a76b16
		"--color-warning-800": "134 85 17", // #865511
		"--color-warning-900": "109 70 14", // #6d460e
		// error | #d20f39 
		"--color-error-50": "248 219 225", // #f8dbe1
		"--color-error-100": "246 207 215", // #f6cfd7
		"--color-error-200": "244 195 206", // #f4c3ce
		"--color-error-300": "237 159 176", // #ed9fb0
		"--color-error-400": "224 87 116", // #e05774
		"--color-error-500": "210 15 57", // #d20f39
		"--color-error-600": "189 14 51", // #bd0e33
		"--color-error-700": "158 11 43", // #9e0b2b
		"--color-error-800": "126 9 34", // #7e0922
		"--color-error-900": "103 7 28", // #67071c
		// surface | #eff1f5 
		"--color-surface-50": "253 253 254", // #fdfdfe
		"--color-surface-100": "252 252 253", // #fcfcfd
		"--color-surface-200": "251 252 253", // #fbfcfd
		"--color-surface-300": "249 249 251", // #f9f9fb
		"--color-surface-400": "244 245 248", // #f4f5f8
		"--color-surface-500": "239 241 245", // #eff1f5
		"--color-surface-600": "215 217 221", // #d7d9dd
		"--color-surface-700": "179 181 184", // #b3b5b8
		"--color-surface-800": "143 145 147", // #8f9193
		"--color-surface-900": "117 118 120", // #757678
		
	}
}