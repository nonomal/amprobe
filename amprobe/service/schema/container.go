// Package schema
// Date: 2024/3/6 13:20
// Author: Amu
// Description:
package schema

import "time"

type VersionArgs struct{}

type Container struct {
	ID            string `json:"id"`
	Name          string `json:"name"`
	Image         string `json:"image"`
	IP            string `json:"ip"`
	State         string `json:"state"`
	Uptime        string `json:"uptime"`
	CPUPercent    string `json:"cpu_percent"`
	MemoryPercent string `json:"memory_percent"`
	MemoryUsage   string `json:"memory_usage"`
	MemoryLimit   string `json:"memory_limit"`
}

type ContainerQueryArgs struct {
	Page int `json:"page" validate:"required"`
	Size int `json:"size" validate:"gte=0"`
}

type QueryCountArgs struct{}

type QueryCountReply struct {
	Count int
}

type ContainerStartArgs struct {
	ContainerID string `json:"container_id" validate:"required"`
}

type ContainerStartReply struct{}

type ContainerStopArgs struct {
	ContainerID string `json:"container_id" validate:"required"`
}

type ContainerStopReply struct{}

type ContainerRemoveArgs struct {
	ContainerID string `json:"container_id" validate:"required"`
}

type ContainerRemoveReply struct{}

type ContainerRestartArgs struct {
	ContainerID string `json:"container_id" validate:"required"`
}

type ContainerRestartReply struct{}

type ContainerQueryRely struct {
	Data  []Container `json:"data"`
	Total int         `json:"total"`
	Page  int         `json:"page"`
	Size  int         `json:"size"`
}

type Image struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	Tag     string `json:"tag"`
	Created string `json:"created"`
	Size    string `json:"size"`
	Number  int    `json:"number"`
}

type ImageQueryArgs struct {
	Page int `json:"page" validate:"required"`
	Size int `json:"size" validate:"gt=0"`
}

type ImageQueryReply struct {
	Data  []Image `json:"data"`
	Total int     `json:"total"`
	Page  int     `json:"page"`
	Size  int     `json:"size"`
}

type ImageRemoveArgs struct {
	ImageID string `json:"image_id" validate:"required"`
}

type ImageRemoveReply struct{}

type ImageCountArgs struct{}

type ImageCountReply struct {
	Count int
}

type Docker struct {
	Timestamp     time.Time
	DockerVersion string `json:"docker_version"`
	APIVersion    string `json:"api_version"`
	MinAPIVersion string `json:"min_api_version"`
	GitCommit     string `json:"git_commit"`
	GoVersion     string `json:"go_version"`
	Os            string `json:"os"`
	Arch          string `json:"arch"`
}
