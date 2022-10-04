import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        author: 'Author',
        illustrator: 'Illustrator',
        narrator: 'Narrator',
        product: 'Product',
        isbn10: 'ISBN-10',
        isbn13: 'ISBN-13',
        publisher: 'Publisher',
        yearmd: 'Publish Date',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseIllustrator: (state, action) => { state.illustrator = action.payload},
        chooseNarrator: (state, action) => { state.narrator = action.payload},
        chooseProduct: (state, action) => { state.product = action.payload},
        chooseIsbn10: (state, action) => { state.isbn10 = action.payload},
        chooseIsbn13: (state, action) => { state.isbn13 = action.payload},
        choosePublisher: (state, action) => { state.publisher = action.payload},
        chooseYearmd: (state, action) => { state.yearmd = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseIllustrator, chooseNarrator, chooseProduct, chooseIsbn10, chooseIsbn13, choosePublisher, chooseYearmd } = rootSlice.actions;