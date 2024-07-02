// Package service
// Date: 2022/11/9 10:18
// Author: Amu
// Description:
package service

import (
	"fmt"
	"io"
	"net"

	"github.com/amuluze/amutool/database"
	"github.com/amuluze/amutool/docker"
	"github.com/amuluze/amvector/service/rpc"
	"github.com/smallnest/rpcx/server"
	"github.com/smallnest/rpcx/share"
)

type Server struct {
	address string
	server  *server.Server
}

func NewRPCServer(config *Config, db *database.DB) (*Server, error) {
	srv := server.NewServer()
	p := server.NewFileTransfer("0.0.0.0:9527", UploadFileHandler, DownloadFileHandler, 1000)
	srv.EnableFileTransfer(share.SendFileServiceName, p)
	manager, err := docker.NewManager()
	if err != nil {
		return nil, err
	}
	s := rpc.NewService(db, manager)

	err = srv.Register(s, "")
	if err != nil {
		return nil, err
	}

	return &Server{
		address: config.Rpc.Address,
		server:  srv,
	}, nil
}

func (s *Server) Start() error {
	return s.server.Serve("unix", s.address)
}

func (s *Server) Stop() error {
	return s.server.Close()
}

func UploadFileHandler(conn net.Conn, args *share.FileTransferArgs) {
	fmt.Printf("received file name: %s, size: %d\n", args.FileName, args.FileSize)
	data, err := io.ReadAll(conn)
	if err != nil {
		fmt.Printf("error read: %v\n", err)
		return
	}
	fmt.Printf("file content: %s\n", data)
	return
}

func DownloadFileHandler(conn net.Conn, args *share.DownloadFileArgs) {
	return
}
