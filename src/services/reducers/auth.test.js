import { authReducer } from "./auth.ts";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED } from "../actions/auth";

const initialState = {
  email: "",
  name: "",
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  loadUserRequest: false,
  loadUserFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  isforgotPasswordRequest: false,
  isforgotPasswordSaccess: false,
  isTokenUpdated: false,
  tokenUpdateDate: null,
};

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        registerRequest: true,
      })
    );
  });
  it("should handle REGISTER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
        user: {
          name: "test",
          email: "test@test.tt",
        },
      })
    ).toEqual(
      expect.objectContaining({
        name: "test",
        email: "test@test.tt",
      })
    );
  });
  it("should handle REGISTER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        registerFailed: true,
      })
    );
  });
  it("should handle LOGIN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        loginRequest: true,
      })
    );
  });
  it("should handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        user: {
          name: "test",
          email: "test@test.tt",
        },
      })
    ).toEqual(
      expect.objectContaining({
        name: "test",
        email: "test@test.tt",
      })
    );
  });
  it("should handle LOGIN_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        loginFailed: true,
      })
    );
  });
  it("should handle LOAD_USER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOAD_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        loadUserRequest: true,
      })
    );
  });
  it("should handle LOAD_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOAD_USER_SUCCESS,
        user: {
          name: "test",
          email: "test@test.tt",
        },
      })
    ).toEqual(
      expect.objectContaining({
        name: "test",
        email: "test@test.tt",
      })
    );
  });
  it("should handle LOAD_USER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: LOAD_USER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        loadUserFailed: true,
      })
    );
  });
  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        loginRequest: true,
      })
    );
  });
  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        user: {
          name: "test",
          email: "test@test.tt",
        },
      })
    ).toEqual(
      expect.objectContaining({
        name: "test",
        email: "test@test.tt",
      })
    );
  });
  it("should handle UPDATE_USER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        loginFailed: true,
      })
    );
  });
  it("should handle LOGOUT_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        logoutRequest: true,
      })
    );
  });
  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_SUCCESS,
        user: {
          name: "",
          email: "",
        },
      })
    ).toEqual(
      expect.objectContaining({
        name: "",
        email: "",
      })
    );
  });
  it("should handle LOGOUT_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        logoutFailed: true,
      })
    );
  });
  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        forgotPasswordRequest: true,
      })
    );
  });
  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        isforgotPasswordRequest: true,
        isforgotPasswordSaccess: true,
      })
    );
  });
  it("should handle FORGOT_PASSWORD_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        forgotPasswordFailed: true,
        isforgotPasswordRequest: true,
      })
    );
  });
  it("should handle REFRESH_TOKEN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: REFRESH_TOKEN_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        
      })
    );
  });
  it("should handle REFRESH_TOKEN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: REFRESH_TOKEN_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        isTokenUpdated: true,
        tokenUpdateDate: true,
      })
    );
  });
  it("should handle REFRESH_TOKEN_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: REFRESH_TOKEN_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        isTokenUpdated: true,
      })
    );
  });
});
