// Package middleware
// Date: 2024/3/27 16:29
// Author: Amu
// Description:
package middleware

import (
	"encoding/json"
	"runtime"

	"amprobe/pkg/errors"

	"github.com/gofiber/fiber/v2"

	"github.com/gofiber/fiber/v2/middleware/recover"
)

var defaultStackTraceBufLen = 1024

func StackTraceHandler(c *fiber.Ctx, e interface{}) {
	buf := make([]byte, defaultStackTraceBufLen)
	buf = buf[:runtime.Stack(buf, false)]
	data, _ := json.Marshal(errors.InternalServerError)
	_, _ = c.Write(data)
}

var StackMiddleware = recover.New(recover.Config{
	EnableStackTrace:  true,
	StackTraceHandler: StackTraceHandler,
})
