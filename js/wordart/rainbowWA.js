async function createRainbowWordArt(text) {
    const createTextCommand = {
        "_obj": "make",
        "_target": [
            {
                "_ref": "textLayer"
            }
        ],
        "using": {
            "_obj": "textLayer",
            "textKey": text,
            "textShape": [
                {
                    "_obj": "textShape",
                    "char": {
                        "_enum": "char",
                        "_value": "box"
                    },
                    "bounds": {
                        "_obj": "rectangle",
                        "top": 100,
                        "left": 100,
                        "bottom": 400,
                        "right": 500
                    }
                }
            ],
            "textStyleRange": [
                {
                    "_obj": "textStyleRange",
                    "from": 0,
                    "to": text.length,
                    "textStyle": {
                        "_obj": "textStyle",
                        "fontName": "Myriad Pro",
                        "fontStyleName": "Bold",
                        "size": {
                            "_unit": "pointsUnit",
                            "_value": 36
                        },
                        "color": {
                            "_obj": "RGBColor",
                            "red": 0,
                            "green": 0,
                            "blue": 0
                        },
                    }
                }
            ],
            "_isCommand": true
        }
    };

    const setRainbowGradient = {
        "_obj": "set",
        "_target": [
            {
                "_ref": "property",
                "_property": "layerEffects"
            },
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "to": {
            "_obj": "layerEffects",
            "scale": {
                "_unit": "percentUnit",
                "_value": 100
            },
            "gradientFill": {
                "_obj": "gradientFill",
                "enabled": true,
                "present": true,
                "showInDialog": true,
                "mode": {
                    "_enum": "blendMode",
                    "_value": "normal"
                },
                "opacity": {
                    "_unit": "percentUnit",
                    "_value": 100
                },
                "gradient": {
                    "_obj": "gradientClassEvent",
                    "name": "Custom",
                    "gradientForm": {
                        "_enum": "gradientForm",
                        "_value": "customStops"
                    },
                    "interfaceIconFrameDimmed": 4096,
                    "colors": [
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 183.0010986328125,
                                "grain": 11.00372314453125,
                                "blue": 145.00167846679688
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 0,
                            "midpoint": 50
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 247.9962158203125,
                                "grain": 93.99856567382812,
                                "blue": 33.999481201171875
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 743,
                            "midpoint": 33
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 255,
                                "grain": 195.00091552734375,
                                "blue": 29.003448486328125
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 1684,
                            "midpoint": 45
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 173.00125122070312,
                                "grain": 213.99673461914062,
                                "blue": 27.00347900390625
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 2351,
                            "midpoint": 62
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 75.99884033203125,
                                "grain": 165.99746704101562,
                                "blue": 57.003021240234375
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 3059,
                            "midpoint": 50
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 31.99951171875,
                                "grain": 83.00262451171875,
                                "blue": 145.99777221679688
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 3514,
                            "midpoint": 50
                        },
                        {
                            "_obj": "colorStop",
                            "color": {
                                "_obj": "RGBColor",
                                "red": 109.00222778320312,
                                "grain": 27.00347900390625,
                                "blue": 157.99758911132812
                            },
                            "type": {
                                "_enum": "colorStopType",
                                "_value": "userStop"
                            },
                            "location": 4096,
                            "midpoint": 50
                        }
                    ],
                    "transparency": [
                        {
                            "_obj": "transferSpec",
                            "opacity": {
                                "_unit": "percentUnit",
                                "_value": 100
                            },
                            "location": 0,
                            "midpoint": 50
                        },
                        {
                            "_obj": "transferSpec",
                            "opacity": {
                                "_unit": "percentUnit",
                                "_value": 100
                            },
                            "location": 4096,
                            "midpoint": 50
                        }
                    ]
                },
                "angle": {
                    "_unit": "angleUnit",
                    "_value": 0
                },
                "type": {
                    "_enum": "gradientType",
                    "_value": "linear"
                },
                "reverse": false,
                "dither": false,
                "$gs99": {
                    "_enum": "gradientInterpolationMethodType",
                    "_value": "classic"
                },
                "align": true,
                "scale": {
                    "_unit": "percentUnit",
                    "_value": 100
                },
                "offset": {
                    "_obj": "paint",
                    "horizontal": {
                        "_unit": "percentUnit",
                        "_value": 0
                    },
                    "vertical": {
                        "_unit": "percentUnit",
                        "_value": 0
                    }
                }
            }
        },
        "_isCommand": false
    };

    const duplicateTextCommand = {
        "_obj": "duplicate",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "name": "WA Shadow",
        "_isCommand": false
    };

    const resizeShadowTextCommand = {
        "_obj": "set",
        "_target": [
            {
                "_ref": "textLayer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "to": {
            "_obj": "textLayer",
            "textKey": "WordArt",
            "warp": {
                "_obj": "warp",
                "warpStyle": {
                    "_enum": "warpStyle",
                    "_value": "warpNone"
                },
                "warpValue": 0,
                "warpPerspective": 0,
                "warpPerspectiveOther": 0,
                "warpRotate": {
                    "_enum": "orientation",
                    "_value": "horizontal"
                }
            },
            "textGridding": {
                "_enum": "textGridding",
                "_value": "none"
            },
            "orientation": {
                "_enum": "orientation",
                "_value": "horizontal"
            },
            "antiAlias": {
                "_enum": "antiAliasType",
                "_value": "antiAliasSharp"
            },
            "bounds": {
                "_obj": "bounds",
                "left": {
                    "_unit": "pointsUnit",
                    "_value": 0
                },
                "top": {
                    "_unit": "pointsUnit",
                    "_value": 0
                },
                "right": {
                    "_unit": "pointsUnit",
                    "_value": 400
                },
                "bottom": {
                    "_unit": "pointsUnit",
                    "_value": 300
                }
            },
            "boundingBox": {
                "_obj": "boundingBox",
                "left": {
                    "_unit": "pointsUnit",
                    "_value": 1.0625
                },
                "top": {
                    "_unit": "pointsUnit",
                    "_value": 12.622177124023438
                },
                "right": {
                    "_unit": "pointsUnit",
                    "_value": 135.77301025390625
                },
                "bottom": {
                    "_unit": "pointsUnit",
                    "_value": 25.547760009765625
                }
            },
            "textShape": [
                {
                    "_obj": "textShape",
                    "char": {
                        "_enum": "char",
                        "_value": "box"
                    },
                    "orientation": {
                        "_enum": "orientation",
                        "_value": "horizontal"
                    },
                    "transform": {
                        "_obj": "transform",
                        "xx": 1,
                        "xy": 0,
                        "yx": 0,
                        "yy": 1,
                        "tx": -100,
                        "ty": -100
                    },
                    "rowCount": 1,
                    "columnCount": 1,
                    "rowMajorOrder": true,
                    "rowGutter": {
                        "_unit": "pointsUnit",
                        "_value": 0
                    },
                    "columnGutter": {
                        "_unit": "pointsUnit",
                        "_value": 0
                    },
                    "spacing": {
                        "_unit": "pointsUnit",
                        "_value": 0
                    },
                    "frameBaselineAlignment": {
                        "_enum": "frameBaselineAlignment",
                        "_value": "alignByAscent"
                    },
                    "firstBaselineMinimum": {
                        "_unit": "pointsUnit",
                        "_value": 0
                    },
                    "bounds": {
                        "_obj": "rectangle",
                        "top": 100,
                        "left": 100,
                        "bottom": 400,
                        "right": 500
                    }
                }
            ],
            "textStyleRange": [
                {
                    "_obj": "textStyleRange",
                    "from": 0,
                    "to": 8,
                    "textStyle": {
                        "_obj": "textStyle",
                        "styleSheetHasParent": true,
                        "fontPostScriptName": "MyriadPro-Bold",
                        "fontName": "Myriad Pro",
                        "fontStyleName": "Bold",
                        "fontScript": 0,
                        "fontTechnology": 0,
                        "fontAvailable": true,
                        "size": {
                            "_unit": "pointsUnit",
                            "_value": 36
                        },
                        "impliedFontSize": {
                            "_unit": "pointsUnit",
                            "_value": 36
                        },
                        "horizontalScale": 100,
                        "verticalScale": 50,
                        "syntheticBold": false,
                        "syntheticItalic": false,
                        "autoLeading": true,
                        "tracking": 0,
                        "baselineShift": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedBaselineShift": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "autoKern": {
                            "_enum": "autoKern",
                            "_value": "metricsKern"
                        },
                        "fontCaps": {
                            "_enum": "fontCaps",
                            "_value": "normal"
                        },
                        "digitSet": {
                            "_enum": "digitSet",
                            "_value": "defaultDigits"
                        },
                        "kashidas": {
                            "_enum": "kashidas",
                            "_value": "kashidaDefault"
                        },
                        "diacXOffset": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "diacYOffset": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "markYDistFromBaseline": {
                            "_unit": "pointsUnit",
                            "_value": 100
                        },
                        "baseline": {
                            "_enum": "baseline",
                            "_value": "normal"
                        },
                        "otbaseline": {
                            "_enum": "otbaseline",
                            "_value": "normal"
                        },
                        "strikethrough": {
                            "_enum": "strikethrough",
                            "_value": "strikethroughOff"
                        },
                        "underline": {
                            "_enum": "underline",
                            "_value": "underlineOff"
                        },
                        "ligature": true,
                        "altligature": false,
                        "contextualLigatures": false,
                        "fractions": false,
                        "ordinals": false,
                        "swash": false,
                        "titling": false,
                        "connectionForms": false,
                        "stylisticAlternates": false,
                        "stylisticSets": 0,
                        "ornaments": false,
                        "justificationAlternates": false,
                        "figureStyle": {
                            "_enum": "figureStyle",
                            "_value": "normal"
                        },
                        "proportionalMetrics": false,
                        "kana": false,
                        "italics": false,
                        "baselineDirection": {
                            "_enum": "baselineDirection",
                            "_value": "withStream"
                        },
                        "textLanguage": {
                            "_enum": "textLanguage",
                            "_value": "englishLanguage"
                        },
                        "japaneseAlternate": {
                            "_enum": "japaneseAlternate",
                            "_value": "defaultForm"
                        },
                        "mojiZume": 0,
                        "gridAlignment": {
                            "_enum": "gridAlignment",
                            "_value": "roman"
                        },
                        "noBreak": false,
                        "color": {
                            "_obj": "RGBColor",
                            "red": 100.00000163912773,
                            "grain": 0,
                            "blue": 240.00000089406967
                        },
                        "strokeColor": {
                            "_obj": "RGBColor",
                            "red": 0,
                            "grain": 0,
                            "blue": 0
                        },
                        "baseParentStyle": {
                            "_obj": "textStyle",
                            "fontPostScriptName": "MyriadPro-Regular",
                            "fontName": "Myriad Pro",
                            "fontStyleName": "Regular",
                            "fontScript": 0,
                            "fontTechnology": 0,
                            "fontAvailable": true,
                            "size": {
                                "_unit": "pointsUnit",
                                "_value": 12
                            },
                            "impliedFontSize": {
                                "_unit": "pointsUnit",
                                "_value": 12
                            },
                            "horizontalScale": 100,
                            "verticalScale": 100,
                            "syntheticBold": false,
                            "syntheticItalic": false,
                            "autoLeading": true,
                            "tracking": 0,
                            "baselineShift": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "impliedBaselineShift": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "characterRotation": 0,
                            "autoKern": {
                                "_enum": "autoKern",
                                "_value": "metricsKern"
                            },
                            "fontCaps": {
                                "_enum": "fontCaps",
                                "_value": "normal"
                            },
                            "digitSet": {
                                "_enum": "digitSet",
                                "_value": "defaultDigits"
                            },
                            "dirOverride": {
                                "_enum": "dirOverride",
                                "_value": "dirOverrideDefault"
                            },
                            "kashidas": {
                                "_enum": "kashidas",
                                "_value": "kashidaDefault"
                            },
                            "diacVPos": {
                                "_enum": "diacVPos",
                                "_value": "diacVPosOpenType"
                            },
                            "diacXOffset": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "diacYOffset": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "markYDistFromBaseline": {
                                "_unit": "pointsUnit",
                                "_value": 100
                            },
                            "baseline": {
                                "_enum": "baseline",
                                "_value": "normal"
                            },
                            "otbaseline": {
                                "_enum": "otbaseline",
                                "_value": "normal"
                            },
                            "strikethrough": {
                                "_enum": "strikethrough",
                                "_value": "strikethroughOff"
                            },
                            "underline": {
                                "_enum": "underline",
                                "_value": "underlineOff"
                            },
                            "underlineOffset": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "ligature": true,
                            "altligature": false,
                            "contextualLigatures": false,
                            "alternateLigatures": false,
                            "oldStyle": false,
                            "fractions": false,
                            "ordinals": false,
                            "swash": false,
                            "titling": false,
                            "connectionForms": false,
                            "stylisticAlternates": false,
                            "stylisticSets": 0,
                            "ornaments": false,
                            "justificationAlternates": false,
                            "figureStyle": {
                                "_enum": "figureStyle",
                                "_value": "normal"
                            },
                            "proportionalMetrics": false,
                            "kana": false,
                            "italics": false,
                            "ruby": false,
                            "baselineDirection": {
                                "_enum": "baselineDirection",
                                "_value": "rotated"
                            },
                            "textLanguage": {
                                "_enum": "textLanguage",
                                "_value": "englishLanguage"
                            },
                            "japaneseAlternate": {
                                "_enum": "japaneseAlternate",
                                "_value": "defaultForm"
                            },
                            "mojiZume": 0,
                            "gridAlignment": {
                                "_enum": "gridAlignment",
                                "_value": "roman"
                            },
                            "enableWariChu": false,
                            "wariChuCount": 2,
                            "wariChuLineGap": 0,
                            "wariChuScale": 0.5,
                            "wariChuWidow": 2,
                            "wariChuOrphan": 2,
                            "wariChuJustification": {
                                "_enum": "wariChuJustification",
                                "_value": "wariChuAutoJustify"
                            },
                            "tcyUpDown": 0,
                            "tcyLeftRight": 0,
                            "leftAki": -1,
                            "rightAki": -1,
                            "jiDori": 0,
                            "noBreak": false,
                            "color": {
                                "_obj": "RGBColor",
                                "red": 0,
                                "grain": 0,
                                "blue": 0
                            },
                            "strokeColor": {
                                "_obj": "RGBColor",
                                "red": 0,
                                "grain": 0,
                                "blue": 0
                            },
                            "fill": true,
                            "stroke": false,
                            "fillFirst": true,
                            "fillOverPrint": false,
                            "strokeOverPrint": false,
                            "lineCap": {
                                "_enum": "lineCap",
                                "_value": "buttCap"
                            },
                            "lineJoin": {
                                "_enum": "lineJoin",
                                "_value": "miterJoin"
                            },
                            "lineWidth": {
                                "_unit": "pointsUnit",
                                "_value": 1
                            },
                            "miterLimit": {
                                "_unit": "pointsUnit",
                                "_value": 4
                            },
                            "lineDashoffset": 0
                        }
                    }
                }
            ],
            "paragraphStyleRange": [
                {
                    "_obj": "paragraphStyleRange",
                    "from": 0,
                    "to": 8,
                    "paragraphStyle": {
                        "_obj": "paragraphStyle",
                        "styleSheetHasParent": true,
                        "align": {
                            "_enum": "alignmentType",
                            "_value": "left"
                        },
                        "firstLineIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedFirstLineIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "startIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedStartIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "endIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedEndIndent": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "spaceBefore": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedSpaceBefore": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "spaceAfter": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "impliedSpaceAfter": {
                            "_unit": "pointsUnit",
                            "_value": 0
                        },
                        "dropCapMultiplier": 1,
                        "autoLeadingPercentage": 1.2000000476837158,
                        "leadingType": {
                            "_enum": "leadingType",
                            "_value": "leadingBelow"
                        },
                        "directionType": {
                            "_enum": "directionType",
                            "_value": "dirLeftToRight"
                        },
                        "kashidaWidthType": {
                            "_enum": "kashidaWidthType",
                            "_value": "kashidaWidthMedium"
                        },
                        "justificationMethodType": {
                            "_enum": "justificationMethodType",
                            "_value": "justifMethodAutomatic"
                        },
                        "hyphenate": false,
                        "hyphenateWordSize": 6,
                        "hyphenatePreLength": 2,
                        "hyphenatePostLength": 2,
                        "hyphenateLimit": 0,
                        "hyphenationZone": 36,
                        "hyphenateCapitalized": true,
                        "hyphenationPreference": 0.5,
                        "justificationWordMinimum": 0.800000011920929,
                        "justificationWordDesired": 1,
                        "justificationWordMaximum": 1.3300000429153442,
                        "justificationLetterMinimum": 0,
                        "justificationLetterDesired": 0,
                        "justificationLetterMaximum": 0,
                        "justificationGlyphMinimum": 1,
                        "justificationGlyphDesired": 1,
                        "justificationGlyphMaximum": 1,
                        "singleWordJustification": {
                            "_enum": "alignmentType",
                            "_value": "justifyAll"
                        },
                        "hangingRoman": false,
                        "autoTCY": 0,
                        "keepTogether": true,
                        "burasagari": {
                            "_enum": "burasagari",
                            "_value": "burasagariNone"
                        },
                        "preferredKinsokuOrder": {
                            "_enum": "preferredKinsokuOrder",
                            "_value": "pushIn"
                        },
                        "kurikaeshiMojiShori": false,
                        "textEveryLineComposer": false,
                        "textComposerEngine": {
                            "_enum": "textComposerEngine",
                            "_value": "textOptycaComposer"
                        },
                        "defaultTabWidth": 36,
                        "defaultStyle": {
                            "_obj": "textStyle",
                            "fontPostScriptName": "MyriadPro-Regular",
                            "fontName": "Myriad Pro",
                            "fontStyleName": "Regular",
                            "fontScript": 0,
                            "fontTechnology": 0,
                            "fontAvailable": true,
                            "size": {
                                "_unit": "pointsUnit",
                                "_value": 12
                            },
                            "horizontalScale": 100,
                            "verticalScale": 100,
                            "syntheticBold": false,
                            "syntheticItalic": false,
                            "autoLeading": true,
                            "tracking": 0,
                            "baselineShift": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "characterRotation": 0,
                            "autoKern": {
                                "_enum": "autoKern",
                                "_value": "metricsKern"
                            },
                            "fontCaps": {
                                "_enum": "fontCaps",
                                "_value": "normal"
                            },
                            "digitSet": {
                                "_enum": "digitSet",
                                "_value": "arabicDigits"
                            },
                            "kashidas": {
                                "_enum": "kashidas",
                                "_value": "kashidaDefault"
                            },
                            "diacVPos": {
                                "_enum": "diacVPos",
                                "_value": "diacVPosOpenType"
                            },
                            "diacXOffset": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "diacYOffset": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "markYDistFromBaseline": {
                                "_unit": "pointsUnit",
                                "_value": 0
                            },
                            "baseline": {
                                "_enum": "baseline",
                                "_value": "normal"
                            },
                            "strikethrough": {
                                "_enum": "strikethrough",
                                "_value": "strikethroughOff"
                            },
                            "underline": {
                                "_enum": "underline",
                                "_value": "underlineOff"
                            },
                            "ligature": true,
                            "altligature": false,
                            "contextualLigatures": true,
                            "alternateLigatures": false,
                            "oldStyle": false,
                            "fractions": false,
                            "ordinals": false,
                            "swash": false,
                            "titling": false,
                            "connectionForms": true,
                            "stylisticAlternates": false,
                            "stylisticSets": 0,
                            "ornaments": false,
                            "figureStyle": {
                                "_enum": "figureStyle",
                                "_value": "normal"
                            },
                            "baselineDirection": {
                                "_enum": "baselineDirection",
                                "_value": "withStream"
                            },
                            "textLanguage": {
                                "_enum": "textLanguage",
                                "_value": "ukenglishLanguage"
                            },
                            "color": {
                                "_obj": "RGBColor",
                                "red": 0,
                                "grain": 0,
                                "blue": 0
                            },
                            "strokeColor": {
                                "_obj": "RGBColor",
                                "red": 0,
                                "grain": 0,
                                "blue": 0
                            }
                        }
                    }
                }
            ],
            "kerningRange": []
        },
        "_isCommand": false
    };

    const removeGradientCommand = {
        "_obj": "set",
        "_target": [
            {
                "_ref": "property",
                "_property": "layerEffects"
            },
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "to": {
            "_obj": "layerEffects",
            "scale": {
                "_unit": "percentUnit",
                "_value": 100
            }
        },
        "_isCommand": false
    };

    const rasterizeLayerCommand = {
        "_obj": "rasterizeLayer",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "_isCommand": false
    };

    const changeOpacityCommand = {
        "_obj": "set",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "to": {
            "_obj": "layer",
            "opacity": {
                "_unit": "percentUnit",
                "_value": 24
            }
        },
        "_isCommand": false
    };

    const changePerspectiveCommand = {
        "_obj": "transform",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "freeTransformCenterState": {
            "_enum": "quadCenterState",
            "_value": "QCSAverage"
        },
        "offset": {
            "_obj": "offset",
            "horizontal": {
                "_unit": "pixelsUnit",
                "_value": -13.5
            },
            "vertical": {
                "_unit": "pixelsUnit",
                "_value": 0
            }
        },
        "skew": {
            "_obj": "paint",
            "horizontal": {
                "_unit": "angleUnit",
                "_value": 60
            },
            "vertical": {
                "_unit": "angleUnit",
                "_value": 0
            }
        },
        "interfaceIconFrameDimmed": {
            "_enum": "interpolationType",
            "_value": "bicubic"
        },
        "_isCommand": false
    };

    return await require("photoshop").core.executeAsModal(async () => {
        await require('photoshop').action.batchPlay([
            createTextCommand,
            setRainbowGradient,
            duplicateTextCommand,
            removeGradientCommand,
            resizeShadowTextCommand,
            rasterizeLayerCommand,
            changeOpacityCommand,
            changePerspectiveCommand
            ], {});
    }, { commandName: "Create Rainbow WordArt" });
}