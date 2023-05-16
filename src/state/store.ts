import { configureStore, createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
	name: "images",
	initialState: {
		searchValue: "",
		images: [],
		title: "",
	},
	reducers: {
		updateImages: (state, params) => {
			const { images, title } = params.payload;

			state.images = images;
			state.title = title;
		},
		updateSearchValue: (state, params) => {
			state.searchValue = params.payload;
		},
	},
});

const { actions, reducer } = imagesSlice;
export const { updateImages, updateSearchValue } = actions;

const store = configureStore({ reducer });
export default store;

export type RootStore = typeof store;
export type RootState = ReturnType<typeof reducer>;
export type RootDispatch = typeof store.dispatch;
