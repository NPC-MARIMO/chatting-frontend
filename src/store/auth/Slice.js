import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
}


export const createUser = createAsyncThunk(
    "/auth/signin",

    async (formData) => {
        const response = await axios.post(
            `http://localhost:5000/api/auth/signin`,
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
)

export const loginUser = createAsyncThunk(
    '/auth/login',
    async (formData) => {
        const response = await axios.post(
            `http://localhost:5000/api/auth/login`,
            formData,
            {
                withCredentials: true,
            }
        )

        return response.data;
    }
)

export const checkAuth = createAsyncThunk(
    "/auth/checkauth",

    async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/auth/check-auth`,
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            console.log(error , 'heyy')
        }
    }
);

export const logoutUser = createAsyncThunk(
    '/auth/logout',

    async () => {
        const response = await axios.post(
            `http://localhost:5000/api/auth.logout`,
            {},
            {
                withCredentials : true
            }
        )

        return response.data;
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(createUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(createUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null ;
                state.isAuthenticated = false;
            })
            
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
