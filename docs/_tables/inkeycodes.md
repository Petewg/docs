---
layout: post
title: Inkey Codes
---

# Inkey Codes

## Input event masks
```
INKEY_MOVE              1
INKEY_LDOWN             2
INKEY_LUP               4
INKEY_RDOWN             8
INKEY_RUP               16
INKEY_MMIDDLE           32  /* Harbour extension middle button mask */
INKEY_MWHEEL            64  /* Harbour extension mouse wheel mask */
INKEY_KEYBOARD          128
INKEY_ALL               ( INKEY_KEYBOARD + INKEY_MOVE + INKEY_LDOWN + INKEY_LUP + INKEY_RDOWN + INKEY_RUP + INKEY_MMIDDLE + INKEY_MWHEEL )
HB_INKEY_RAW            256 /* Harbour extension */
HB_INKEY_GTEVENT        1024 /* Harbour extension */
HB_INKEY_EXT            2048 /* Harbour extension */
HB_INKEY_ALL            ( INKEY_ALL + HB_INKEY_GTEVENT )
```

## Mouse events
```
K_MOUSEMOVE             1001
K_LBUTTONDOWN           1002
K_LBUTTONUP             1003
K_RBUTTONDOWN           1004
K_RBUTTONUP             1005
K_LDBLCLK               1006
K_RDBLCLK               1007
K_MBUTTONDOWN           1008   /* Middle Button Down */
K_MBUTTONUP             1009   /* Middle Button Up */
K_MDBLCLK               1010   /* Middle Button Double Click */
K_MMLEFTDOWN            1011   /* Mouse Move Left Down (COMPATIBILITY with removed Cl*pper incompatible Harbour extension, isn't used anymore) */
K_MMRIGHTDOWN           1012   /* Mouse Move Right Down (COMPATIBILITY with removed Cl*pper incompatible Harbour extension, isn't used anymore) */
K_MMMIDDLEDOWN          1013   /* Mouse Move Middle Down (COMPATIBILITY with removed Cl*pper incompatible Harbour extension, isn't used anymore) */
K_MWFORWARD             1014   /* Mouse Wheel Forward */
K_MWBACKWARD            1015   /* Mouse Wheel Backward */
K_NCMOUSEMOVE           1016   /* Non-Client Area Mouse Movement */
K_MINMOUSE              1001
K_MAXMOUSE              1016
HB_K_RESIZE             1101
HB_K_CLOSE              1102
HB_K_GOTFOCUS           1103
HB_K_LOSTFOCUS          1104
HB_K_CONNECT            1105
HB_K_DISCONNECT         1106
HB_K_TERMINATE          1107
HB_K_MENU               1108
```

## Cursor movement keys
```
K_UP                    5     /*   Up arrow, Ctrl-E */
K_DOWN                  24    /*   Down arrow, Ctrl-X */
K_LEFT                  19    /*   Left arrow, Ctrl-S */
K_RIGHT                 4     /*   Right arrow, Ctrl-D */
K_HOME                  1     /*   Home, Ctrl-A */
K_END                   6     /*   End, Ctrl-F */
K_PGUP                  18    /*   PgUp, Ctrl-R */
K_PGDN                  3     /*   PgDn, Ctrl-C */
K_CTRL_UP               397   /* * Ctrl-Up arrow */
K_CTRL_DOWN             401   /* * Ctrl-Down arrow */
K_CTRL_LEFT             26    /*   Ctrl-Left arrow, Ctrl-Z */
K_CTRL_RIGHT            2     /*   Ctrl-Right arrow, Ctrl-B */
K_CTRL_HOME             29    /*   Ctrl-Home, Ctrl-] */
K_CTRL_END              23    /*   Ctrl-End, Ctrl-W */
K_CTRL_PGUP             31    /*   Ctrl-PgUp, Ctrl-Hyphen */
K_CTRL_PGDN             30    /*   Ctrl-PgDn, Ctrl-^ */
K_ALT_UP                408   /* * Alt-Up arrow */
K_ALT_DOWN              416   /* * Alt-Down arrow */
K_ALT_LEFT              411   /* * Alt-Left arrow */
K_ALT_RIGHT             413   /* * Alt-Right arrow */
K_ALT_HOME              407   /* * Alt-Home */
K_ALT_END               415   /* * Alt-End */
K_ALT_PGUP              409   /* * Alt-PgUp */
K_ALT_PGDN              417   /* * Alt-PgDn */
```

## Misc. keys
```
K_ENTER                 13    /*   Enter, Ctrl-M */
K_INTRO                 13    /* */
K_RETURN                13    /*   Return, Ctrl-M */
K_SPACE                 32    /*   Space bar */
K_ESC                   27    /*   Esc, Ctrl-[ */
K_CTRL_ENTER            10    /*   Ctrl-Enter */
K_CTRL_RETURN           10    /*   Ctrl-Return */
K_CTRL_RET              10    /*   Ctrl-Return (Compatibility) */
K_CTRL_PRTSCR           379   /* * Ctrl-Print Screen */
K_CTRL_QUESTION         309   /*   Ctrl-? */
K_ALT_ENTER             284   /* * Alt-Enter */
K_ALT_RETURN            284   /* * Alt-Return */
K_ALT_ESC               257   /* * Alt-Esc */
```

## Keypad keys
```
KP_CENTER               332   /* * Keypad 5 */
KP_ALT_ENTER            422   /* * Keypad Alt-Enter */
KP_CTRL_5               399   /* * Keypad Ctrl-5 */
KP_CTRL_SLASH           405   /* * Keypad Ctrl-/ */
KP_CTRL_ASTERISK        406   /* * Keypad Ctrl-* */
KP_CTRL_MINUS           398   /* * Keypad Ctrl-- */
KP_CTRL_PLUS            400   /* * Keypad Ctrl-+ */
KP_ALT_5                5     /* * Keypad Alt-5 */
KP_ALT_SLASH            420   /* * Keypad Alt-/ */
KP_ALT_ASTERISK         311   /* * Keypad Alt-* */
KP_ALT_MINUS            330   /* * Keypad Alt-- */
KP_ALT_PLUS             334   /* * Keypad Alt-+ */
```

## Editing keys
```
K_INS                   22    /*   Ins, Ctrl-V */
K_DEL                   7     /*   Del, Ctrl-G */
K_BS                    8     /*   Backspace, Ctrl-H */
K_TAB                   9     /*   Tab, Ctrl-I */
K_SH_TAB                271   /*   Shift-Tab */
K_CTRL_INS              402   /* * Ctrl-Ins */
K_CTRL_DEL              403   /* * Ctrl-Del */
K_CTRL_BS               127   /*   Ctrl-Backspace */
K_CTRL_TAB              404   /* * Ctrl-Tab */
K_ALT_INS               418   /* * Alt-Ins */
K_ALT_DEL               419   /* * Alt-Del */
K_ALT_BS                270   /* * Alt-Backspace */
K_ALT_TAB               421   /* * Alt-Tab */
K_CTRL_SH_TAB           423   /* * Ctrl-Shift-Tab */
K_SH_BS                 423   /* * Shift-Backspace */
```

## Control keys
```
K_CTRL_A                1     /*   Ctrl-A, Home */
K_CTRL_B                2     /*   Ctrl-B, Ctrl-Right arrow */
K_CTRL_C                3     /*   Ctrl-C, PgDn, Ctrl-ScrollLock */
K_CTRL_D                4     /*   Ctrl-D, Right arrow */
K_CTRL_E                5     /*   Ctrl-E, Up arrow */
K_CTRL_F                6     /*   Ctrl-F, End */
K_CTRL_G                7     /*   Ctrl-G, Del */
K_CTRL_H                8     /*   Ctrl-H, Backspace */
K_CTRL_I                9     /*   Ctrl-I, Tab */
K_CTRL_J                10    /*   Ctrl-J */
K_CTRL_K                11    /*   Ctrl-K */
K_CTRL_L                12    /*   Ctrl-L */
K_CTRL_M                13    /*   Ctrl-M, Return */
K_CTRL_N                14    /*   Ctrl-N */
K_CTRL_O                15    /*   Ctrl-O */
K_CTRL_P                16    /*   Ctrl-P */
K_CTRL_Q                17    /*   Ctrl-Q */
K_CTRL_R                18    /*   Ctrl-R, PgUp */
K_CTRL_S                19    /*   Ctrl-S, Left arrow */
K_CTRL_T                20    /*   Ctrl-T */
K_CTRL_U                21    /*   Ctrl-U */
K_CTRL_V                22    /*   Ctrl-V, Ins */
K_CTRL_W                23    /*   Ctrl-W, Ctrl-End */
K_CTRL_X                24    /*   Ctrl-X, Down arrow */
K_CTRL_Y                25    /*   Ctrl-Y */
K_CTRL_Z                26    /*   Ctrl-Z, Ctrl-Left arrow */
```

## Alt keys
```
K_ALT_A                 286   /*   Alt-A */
K_ALT_B                 304   /*   Alt-B */
K_ALT_C                 302   /*   Alt-C */
K_ALT_D                 288   /*   Alt-D */
K_ALT_E                 274   /*   Alt-E */
K_ALT_F                 289   /*   Alt-F */
K_ALT_G                 290   /*   Alt-G */
K_ALT_H                 291   /*   Alt-H */
K_ALT_I                 279   /*   Alt-I */
K_ALT_J                 292   /*   Alt-J */
K_ALT_K                 293   /*   Alt-K */
K_ALT_L                 294   /*   Alt-L */
K_ALT_M                 306   /*   Alt-M */
K_ALT_N                 305   /*   Alt-N */
K_ALT_O                 280   /*   Alt-O */
K_ALT_P                 281   /*   Alt-P */
K_ALT_Q                 272   /*   Alt-Q */
K_ALT_R                 275   /*   Alt-R */
K_ALT_S                 287   /*   Alt-S */
K_ALT_T                 276   /*   Alt-T */
K_ALT_U                 278   /*   Alt-U */
K_ALT_V                 303   /*   Alt-V */
K_ALT_W                 273   /*   Alt-W */
K_ALT_X                 301   /*   Alt-X */
K_ALT_Y                 277   /*   Alt-Y */
K_ALT_Z                 300   /*   Alt-Z */
K_ALT_BACKQUOTE         297   /*   Alt-` */
K_ALT_1                 376   /*   Alt-1 */
K_ALT_2                 377   /*   Alt-2 */
K_ALT_3                 378   /*   Alt-3 */
K_ALT_4                 379   /*   Alt-4 */
K_ALT_5                 380   /*   Alt-5 */
K_ALT_6                 381   /*   Alt-6 */
K_ALT_7                 382   /*   Alt-7 */
K_ALT_8                 383   /*   Alt-8 */
K_ALT_9                 384   /*   Alt-9 */
K_ALT_0                 385   /*   Alt-0 */
K_ALT_MINUS             386
K_ALT_EQUALS            387   /* * Alt-Equals */
K_ALT_OSB               282
K_ALT_CSB               283
K_ALT_BACKSLASH         299
K_ALT_SC                295
K_ALT_QUOTE             296
K_ALT_COMMA             307
K_ALT_PERIOD            308
K_ALT_SLASH             309   /*   Alt-Slash (FYI: Ctrl-? doesn't work - maybe just under Windows XP?) */
```

## Function keys
```
K_F1                    28    /*   F1, Ctrl-Backslash */
K_F2                    -1    /*   F2 */
K_F3                    -2    /*   F3 */
K_F4                    -3    /*   F4 */
K_F5                    -4    /*   F5 */
K_F6                    -5    /*   F6 */
K_F7                    -6    /*   F7 */
K_F8                    -7    /*   F8 */
K_F9                    -8    /*   F9 */
K_F10                   -9    /*   F10 */
K_F11                   -40   /* * F11 */
K_F12                   -41   /* * F12 */
```

## Control-function keys
```
K_CTRL_F1               -20   /*   Ctrl-F1 */
K_CTRL_F2               -21   /*   Ctrl-F2 */
K_CTRL_F3               -22   /*   Ctrl-F4 */
K_CTRL_F4               -23   /*   Ctrl-F3 */
K_CTRL_F5               -24   /*   Ctrl-F5 */
K_CTRL_F6               -25   /*   Ctrl-F6 */
K_CTRL_F7               -26   /*   Ctrl-F7 */
K_CTRL_F8               -27   /*   Ctrl-F8 */
K_CTRL_F9               -28   /*   Ctrl-F9 */
K_CTRL_F10              -29   /*   Ctrl-F10 */
K_CTRL_F11              -44   /* * Ctrl-F11 */
K_CTRL_F12              -45   /* * Ctrl-F12 */
```

## Alt-function keys
```
K_ALT_F1                -30   /*   Alt-F1 */
K_ALT_F2                -31   /*   Alt-F2 */
K_ALT_F3                -32   /*   Alt-F3 */
K_ALT_F4                -33   /*   Alt-F4 */
K_ALT_F5                -34   /*   Alt-F5 */
K_ALT_F6                -35   /*   Alt-F6 */
K_ALT_F7                -36   /*   Alt-F7 */
K_ALT_F8                -37   /*   Alt-F8 */
K_ALT_F9                -38   /*   Alt-F9 */
K_ALT_F10               -39   /*   Alt-F10 */
K_ALT_F11               -46   /* * Alt-F11 */
K_ALT_F12               -47   /* * Alt-F12 */
```

## Shift-function keys
```
K_SH_F1                 -10   /*   Shift-F1 */
K_SH_F2                 -11   /*   Shift-F2 */
K_SH_F3                 -12   /*   Shift-F3 */
K_SH_F4                 -13   /*   Shift-F4 */
K_SH_F5                 -14   /*   Shift-F5 */
K_SH_F6                 -15   /*   Shift-F6 */
K_SH_F7                 -16   /*   Shift-F7 */
K_SH_F8                 -17   /*   Shift-F8 */
K_SH_F9                 -18   /*   Shift-F9 */
K_SH_F10                -19   /*   Shift-F10 */
K_SH_F11                -42   /* * Shift-F11 */
K_SH_F12                -43   /* * Shift-F12 */
```

## Key flags used by extended key codes
```
HB_KF_SHIFT             0x01
HB_KF_CTRL              0x02
HB_KF_ALT               0x04
HB_KF_KEYPAD            0x08
```

## Extended key codes
```
HB_KX_F1                1
HB_KX_F2                2
HB_KX_F3                3
HB_KX_F4                4
HB_KX_F5                5
HB_KX_F6                6
HB_KX_F7                7
HB_KX_F8                8
HB_KX_F9                9
HB_KX_F10               10
HB_KX_F11               11
HB_KX_F12               12
HB_KX_UP                13
HB_KX_DOWN              14
HB_KX_LEFT              15
HB_KX_RIGHT             16
HB_KX_HOME              17
HB_KX_END               18
HB_KX_PGUP              19
HB_KX_PGDN              20
HB_KX_INS               21
HB_KX_DEL               22
HB_KX_BS                23
HB_KX_TAB               24
HB_KX_ESC               25
HB_KX_ENTER             26
HB_KX_CENTER            27
HB_KX_PRTSCR            28
HB_KX_PAUSE             29
```