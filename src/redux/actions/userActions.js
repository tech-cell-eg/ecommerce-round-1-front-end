import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction('user/setUser');
export const signOut = createAction('user/signOut');