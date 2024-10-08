// Package model
// Date: 2024/06/10 18:44:53
// Author: Amu
// Description:
package model

import (
	"time"

	"gorm.io/gorm"
)

type Containers []Container

type Container struct {
	gorm.Model
	Timestamp   time.Time
	ContainerID string
	Name        string
	Image       string
	IP          string
	Ports       string
	State       string
	Uptime      string
	CPUPercent  float64
	MemPercent  float64
	MemUsage    float64
	MemLimit    float64
	Labels      string
}

func (d *Container) TableName() string {
	return "s_container"
}

type Docker struct {
	gorm.Model
	Timestamp     time.Time
	DockerVersion string
	APIVersion    string
	MinAPIVersion string
	GitCommit     string
	GoVersion     string
	Os            string
	Arch          string
}

func (d *Docker) TableName() string {
	return "s_docker"
}

type Images []Image

type Image struct {
	gorm.Model
	Timestamp time.Time
	ImageID   string
	Name      string
	Tag       string
	Created   string
	Size      string
	Number    int
}

func (i *Image) TableName() string { return "s_image" }

type Networks []Network

type Network struct {
	gorm.Model
	Timestamp time.Time
	NetworkID string
	Name      string
	Driver    string
	Scope     string
	Created   string
	Internal  bool
	Subnet    string
	Gateway   string
	Labels    string
}

func (n *Network) TableName() string { return "s_network" }
