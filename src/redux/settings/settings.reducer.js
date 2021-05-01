import {
    SET_DISPLAY_MODE,
    SET_ITEMS_PER_ROW,
    SET_READER_FONT,
    UPDATE_READER_PADDING,
    UPDATE_READER_TEXT_ALIGN,
    UPDATE_READER_TEXT_SIZE,
    UPDATE_READER_THEME,
} from "./settings.types";

const initialState = {
    displayMode: 0,
    itemsPerRow: 3,
    reader: {
        theme: 1,
        textSize: 16,
        textAlign: "left",
        padding: 5,
        fontFamily: null,
    },
};

/**
 * Display Mode
 * 0 -> Compact
 * 1 -> Comfortable
 * 2 -> List
 */

/**
 * Reader Settings
 * theme
 * 1 -> Dark
 * 2 -> White
 * 3 -> Sepia
 */

const settingsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_DISPLAY_MODE:
            return {
                ...state,
                displayMode: payload,
                itemsPerRow: payload === 2 ? 1 : state.itemsPerRow,
            };
        case SET_ITEMS_PER_ROW:
            return {
                ...state,
                itemsPerRow: state.displayMode !== 2 ? payload : 1,
            };
        case UPDATE_READER_THEME:
            return { ...state, reader: { ...state.reader, theme: payload } };
        case UPDATE_READER_TEXT_SIZE:
            return { ...state, reader: { ...state.reader, textSize: payload } };
        case UPDATE_READER_TEXT_ALIGN:
            return {
                ...state,
                reader: { ...state.reader, textAlign: payload },
            };
        case UPDATE_READER_PADDING:
            return {
                ...state,
                reader: { ...state.reader, padding: payload },
            };
        case SET_READER_FONT:
            return {
                ...state,
                reader: { ...state.reader, fontFamily: payload },
            };
        default:
            return state;
    }
};

export default settingsReducer;