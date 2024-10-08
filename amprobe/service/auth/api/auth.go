// Package api
// Date: 2024/3/27 16:39
// Author: Amu
// Description:
package api

import (
	"amprobe/pkg/errors"
	"amprobe/pkg/fiberx"
	"amprobe/pkg/validatex"
	"amprobe/service/auth/service"
	"amprobe/service/schema"

	"github.com/gofiber/fiber/v2"
)

type AuthAPI struct {
	AuthService *service.AuthService
}

func NewLoginAPI(userService *service.AuthService) *AuthAPI {
	return &AuthAPI{AuthService: userService}
}

func (a *AuthAPI) Login(ctx *fiber.Ctx) error {
	c := ctx.UserContext()

	var args schema.LoginArgs
	if err := fiberx.ParseBody(ctx, &args); err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}

	if err := validatex.ValidateStruct(&args); err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}

	res, err := a.AuthService.Login(c, args)
	if err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}
	return fiberx.Success(ctx, res)
}

func (a *AuthAPI) Logout(ctx *fiber.Ctx) error {
	c := ctx.UserContext()
	tokenString := fiberx.GetToken(ctx)

	if err := a.AuthService.Logout(c, tokenString); err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}

	return fiberx.NoContent(ctx)
}

func (a *AuthAPI) PassUpdate(ctx *fiber.Ctx) error {
	c := ctx.UserContext()
	var args schema.PasswordUpdateArgs
	if err := fiberx.ParseBody(ctx, &args); err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}

	if err := validatex.ValidateStruct(&args); err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}

	err := a.AuthService.PassUpdate(c, args)
	if err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}
	return fiberx.Success(ctx, nil)
}

func (a *AuthAPI) TokenUpdate(ctx *fiber.Ctx) error {
	c := ctx.UserContext()
	tokenString := fiberx.GetToken(ctx)
	res, err := a.AuthService.TokenUpdate(c, tokenString)
	if err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}
	return fiberx.Success(ctx, res)
}

func (a *AuthAPI) UserInfo(ctx *fiber.Ctx) error {
	c := ctx.UserContext()
	tokenString := fiberx.GetToken(ctx)
	res, err := a.AuthService.UserInfo(c, tokenString)
	if err != nil {
		return fiberx.Failure(ctx, errors.New400Error(err.Error()))
	}
	return fiberx.Success(ctx, res)
}
