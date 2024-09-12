// Code generated for package assets by go-bindata DO NOT EDIT. (@generated)
// sources:
// assets/resources/amprobe/configs/config.toml
// assets/resources/amprobe/configs/model.conf
// assets/resources/amprobe/nginx/cert/fullchain.pem
// assets/resources/amprobe/nginx/cert/privkey.pem
// assets/resources/amprobe/nginx/conf.d/amprobe.conf
// assets/resources/amprobe/nginx/mime.types
// assets/resources/amprobe/nginx/nginx.conf
package assets

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"time"
)

func bindataRead(data, name string) ([]byte, error) {
	gz, err := gzip.NewReader(strings.NewReader(data))
	if err != nil {
		return nil, fmt.Errorf("Read %q: %v", name, err)
	}

	var buf bytes.Buffer
	_, err = io.Copy(&buf, gz)
	clErr := gz.Close()

	if err != nil {
		return nil, fmt.Errorf("Read %q: %v", name, err)
	}
	if clErr != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}

type asset struct {
	bytes []byte
	info  os.FileInfo
}

type bindataFileInfo struct {
	name    string
	size    int64
	mode    os.FileMode
	modTime time.Time
}

// Name return file name
func (fi bindataFileInfo) Name() string {
	return fi.name
}

// Size return file size
func (fi bindataFileInfo) Size() int64 {
	return fi.size
}

// Mode return file mode
func (fi bindataFileInfo) Mode() os.FileMode {
	return fi.mode
}

// Mode return file modify time
func (fi bindataFileInfo) ModTime() time.Time {
	return fi.modTime
}

// IsDir return file whether a directory
func (fi bindataFileInfo) IsDir() bool {
	return fi.mode&os.ModeDir != 0
}

// Sys return file is sys mode
func (fi bindataFileInfo) Sys() interface{} {
	return nil
}

var _assetsResourcesAmprobeConfigsConfigToml = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x74\x54\x4f\x53\x1a\x49\x1c\xbd\xf7\xa7\x98\x1a\x2f\x7a\x51\x4c\x36\x6b\x2e\x1e\x34\x26\x6b\x6a\x71\xd7\x0a\xee\x89\xb2\x52\x83\xd3\xc2\x94\x38\x3d\x3b\x33\x18\xbd\x61\x2d\x04\x71\x43\x20\x2b\x08\x0b\xc4\x68\x45\x23\x66\x97\x3f\xd9\x4d\xb1\x6e\x18\xe0\xcb\xd0\xdd\x33\x27\xbe\xc2\x56\xcf\x0c\x20\x6c\x05\x2e\x53\xbf\xfe\xbd\xd7\xfd\x7b\xef\x75\xfb\x9f\x48\x01\xa8\x6e\x82\x29\x2e\xa4\xeb\x0a\x2d\xbd\xc1\x99\x3f\x71\xb9\x81\xdf\x46\xc1\x2a\xd2\x74\x6e\x91\xe3\x3d\xb3\xf6\x9f\x1f\xeb\xa1\x7f\xd4\x71\xfa\x3d\x58\x47\x2a\xeb\x79\xe8\xf1\x78\xdc\xe5\x9e\x51\xb0\x4a\x71\x1c\xff\xdb\xca\x57\x69\x35\x89\x3b\x71\xb3\x19\x27\xf9\x26\xc9\x37\xad\x5c\x77\x1a\xa7\x72\xbd\x76\x8a\x5e\xff\x36\x03\x7c\xa1\x88\x2e\xa2\x17\xf2\x86\xb4\x0b\x51\x84\xd1\xdc\xf7\x00\x1f\xdc\x83\xea\x2a\x14\x44\xa8\xb2\xbd\x15\x15\x05\x20\x0f\x96\x14\xe5\x07\x61\x17\xde\xa9\xac\xab\x70\x1b\xa9\x3b\xdc\x22\xb7\x2d\x84\x35\x08\x80\xff\x99\xb2\xb5\x09\x96\x44\x51\x85\x9a\xc6\x1a\xe7\x04\x45\x99\xdb\x83\x5b\x3a\x52\x67\x35\xb4\xb5\xc3\x03\x30\xc5\x91\x5c\x83\xa4\x6a\xf8\xcb\x09\x39\x4d\xf4\x5a\x4d\x5c\x2d\x90\x6c\x87\x1d\xa8\x5d\xa3\xc5\x98\x15\x67\x1f\x60\x8a\xb3\xca\x51\xf3\xc3\x21\x2d\xbd\x21\xaf\xaf\x69\x31\x46\xdf\x1f\xd2\x52\xc1\xac\x75\xf0\x65\x62\xd8\x83\x6b\x45\x92\x6f\xf6\x5a\x2d\x7c\x7c\x41\x92\xd7\xe6\xc5\x2b\x2b\xff\xd9\x2a\x66\xdd\x06\xff\x77\x48\xdd\x65\xba\x92\x42\x1d\x67\x3e\x60\x23\x8a\x33\x75\xb3\xf1\x8b\x59\xcf\x91\xca\x05\x36\xd2\x60\x05\x06\x22\x41\x6e\x91\xd3\xd5\x08\xbc\x7b\x34\xfa\xa9\x85\xcf\x7e\x9d\xa6\xa5\x1a\x4e\xa6\x48\xb6\x4e\x5e\x1d\xd2\x62\x6c\x62\xb9\x6f\x14\x15\xa4\xe9\x41\x15\x6a\x33\x60\x65\x79\xe3\x40\xb1\xd5\xd1\x7e\x0e\x4b\x3a\x64\x56\x99\xb5\x0e\x6d\xd7\xcc\xee\x19\x79\x7d\x85\xd3\xf5\x5e\xeb\xca\x4a\xa4\x68\xb6\xc2\xa8\xca\x51\x2b\xd7\x65\x86\xe4\x3f\xbb\x86\xf4\x8d\xa2\xed\xc9\x9a\xb0\xef\x95\xb6\xa1\x2e\xd9\x62\x2f\xdc\xb3\x6d\x75\xa8\x46\x07\xb0\x19\xf0\xe5\x35\x49\x9e\x60\x23\xea\x6c\x41\x72\x0d\x06\xfe\x51\x81\xf2\x23\x24\xcb\xcc\x81\xf9\x07\x23\x30\xbd\xf9\x62\xe5\xff\x72\x5b\x3f\x9d\xf7\x6e\xab\x43\x96\x31\xfc\x53\x31\x0c\x07\x78\x1b\x3e\xdc\xd5\xbc\xa8\xe0\x4c\x0a\x27\x53\xd4\x88\x82\x0d\x21\x10\x86\x2c\x02\xd2\xbe\x3d\xf5\x73\x7e\x24\x74\xa6\x4e\xb3\x15\x33\xf1\x11\x1f\x57\x48\xe1\x1c\x37\x62\x77\x29\x68\xeb\x84\x9c\xc5\xc0\x63\x99\x11\x2c\x45\x74\xb4\x26\x05\x55\x41\x87\x03\x1b\x80\x7f\x65\x99\x99\xe6\xea\x36\x7e\x11\xf8\xe1\xc2\x78\xfa\xed\x05\x9a\xad\x90\xa3\x7f\x70\x26\x05\x7e\xd2\x9c\xec\xb2\x2a\xae\xbf\xa4\xe7\x87\x60\x5d\xd0\xb4\x17\x48\x15\x07\xe5\xe1\x91\xc0\xca\xf2\x20\xd8\x76\x5e\xdd\x74\x4f\x71\x3e\x9f\xd7\x8d\x89\xcf\xe7\x5d\x43\x22\x74\xa0\xc0\xef\x45\xc1\x4d\xf0\x44\x0a\x8f\x30\x61\x14\xd4\x1c\xe0\x6c\x18\x05\x79\xe0\x85\x7b\x30\xcc\x56\x45\x16\x30\x1e\x3c\x43\xba\xa0\x4b\x48\x66\xa5\x79\x9e\xb3\x7f\x53\x1c\xa9\xa7\xf1\xe5\x0d\x3e\x4a\xe0\xa3\x97\xbd\xdb\x68\xef\xf6\x23\xc9\x5f\xe1\x6e\xde\xb9\x18\xcc\x8b\xa5\xa0\xbd\xc7\x82\x0b\x19\x02\x99\x6b\xc5\x5e\xf7\x2d\xcd\xfd\xce\x2d\x70\xf8\xf2\x86\x59\x69\x63\x01\xf0\x2f\x45\xf4\xd0\xe6\x84\x19\xae\xdc\xa3\xa8\xd3\x6a\x07\x67\x52\xe4\xf4\x5f\x6c\xa4\xa7\x9d\x84\xf7\x8d\xe2\xaa\xef\xc1\xfc\xbd\xb9\x55\xdf\xfd\x87\xdf\xcc\xd9\xdf\x33\xc0\x27\x05\x65\x49\x0e\xae\x41\x3d\x84\x6c\xf1\xec\x3a\x3f\xa4\xd8\x81\x07\x83\x9e\xef\xe1\x01\x6b\x10\x76\x87\x12\x9a\xdd\x04\x29\xbf\x73\x62\xde\x37\x8e\x86\x2f\x4f\xdf\x48\x82\xc7\xfb\x8a\xa4\x42\x71\x94\xf1\x1d\x78\xc0\xb9\xe1\x1a\xe5\x4a\x88\xe8\xa1\xe7\x4c\xf4\x47\x82\x16\x90\xe4\xc9\xb9\xb6\xec\xea\xff\xa6\xb3\x65\x9f\xb8\xe3\xce\x23\x35\x0e\x67\x0f\x48\xf9\x9d\x93\x54\x7c\x7c\x6e\xb6\xdb\xb4\x7a\x4a\x73\x57\x80\xe5\xd2\x8b\x04\x71\x44\xf9\xb5\x56\x67\x38\xe7\xdd\x99\x1c\x71\xc0\xf2\x54\xd6\xa1\x2a\x0b\x2c\x11\xdf\x7a\xc0\x7f\x01\x00\x00\xff\xff\xb3\x76\xec\x40\xf0\x05\x00\x00"

func assetsResourcesAmprobeConfigsConfigTomlBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeConfigsConfigToml,
		"assets/resources/amprobe/configs/config.toml",
	)
}

func assetsResourcesAmprobeConfigsConfigToml() (*asset, error) {
	bytes, err := assetsResourcesAmprobeConfigsConfigTomlBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/configs/config.toml", size: 1520, mode: os.FileMode(420), modTime: time.Unix(1726114261, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeConfigsModelConf = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x6c\x8e\x41\xca\x84\x30\x0c\x85\xf7\x3d\xc5\x5b\x89\x82\x78\x83\x9e\x44\x44\x6a\xff\x54\x2b\xd5\xf4\x8f\x11\x99\xdb\x0f\x75\x16\x83\x30\xab\x84\xc7\xf7\x25\xaf\x17\xfa\x3f\xe9\xd0\xf1\x8f\x42\xdc\xa3\x46\xde\x07\x23\xb0\x38\xce\xa9\x05\x4f\x6b\x0b\xe7\xd5\x98\x3e\x73\x8a\xfe\xf5\xc0\xf2\x0f\x4c\x38\xd1\x03\x9a\x61\x31\xb6\x18\xbf\x27\x28\x04\xf2\x3a\x18\x2a\x3a\x6f\x54\x5f\x0b\x09\xa1\xce\x1d\x05\x85\xb5\x70\x29\xf1\xd5\x34\xc6\xf4\x9b\x53\xbf\x90\x1c\x83\xd9\x60\x31\xd7\xd2\xdd\xff\x72\x19\x0d\xaa\x0a\xd2\xf1\xb4\x16\x27\xdf\xcb\x9d\x38\xaf\x9f\xa4\x34\x7a\x07\x00\x00\xff\xff\x69\x9d\x0d\x22\xe0\x00\x00\x00"

func assetsResourcesAmprobeConfigsModelConfBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeConfigsModelConf,
		"assets/resources/amprobe/configs/model.conf",
	)
}

func assetsResourcesAmprobeConfigsModelConf() (*asset, error) {
	bytes, err := assetsResourcesAmprobeConfigsModelConfBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/configs/model.conf", size: 224, mode: os.FileMode(420), modTime: time.Unix(1726050479, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeNginxCertFullchainPem = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x01\x00\x00\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00"

func assetsResourcesAmprobeNginxCertFullchainPemBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeNginxCertFullchainPem,
		"assets/resources/amprobe/nginx/cert/fullchain.pem",
	)
}

func assetsResourcesAmprobeNginxCertFullchainPem() (*asset, error) {
	bytes, err := assetsResourcesAmprobeNginxCertFullchainPemBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/nginx/cert/fullchain.pem", size: 0, mode: os.FileMode(420), modTime: time.Unix(1726065853, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeNginxCertPrivkeyPem = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x01\x00\x00\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00"

func assetsResourcesAmprobeNginxCertPrivkeyPemBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeNginxCertPrivkeyPem,
		"assets/resources/amprobe/nginx/cert/privkey.pem",
	)
}

func assetsResourcesAmprobeNginxCertPrivkeyPem() (*asset, error) {
	bytes, err := assetsResourcesAmprobeNginxCertPrivkeyPemBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/nginx/cert/privkey.pem", size: 0, mode: os.FileMode(420), modTime: time.Unix(1726065853, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeNginxConfDAmprobeConf = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x8c\x92\x41\x6b\xd4\x40\x14\xc7\xef\xfb\x29\x1e\x6d\x0e\x2a\x34\x2f\xf1\x62\x49\x8e\x82\xe8\x4d\x84\x82\x20\x3a\x8c\x3b\x6f\x9b\xc1\x6c\x26\xbc\x99\x6d\xb6\x48\xc1\x93\x16\xa5\x6a\x41\x84\x4a\x65\x15\x44\x8a\x88\xd5\x53\x0f\xc5\x8f\x33\xdb\xf5\x5b\x48\x92\x5d\x2d\xab\x06\xe7\x90\x4c\xf2\xff\xbd\x79\xef\xff\x67\x2c\xf1\x16\x31\x3c\xec\x01\x00\xe4\xda\x3a\x2a\xa0\x5d\xeb\x51\xfa\xe7\xcf\x3b\x49\x72\x37\x59\x28\x6d\xad\x28\xe4\x90\x00\x44\x0a\xab\x30\x3d\xdc\xf3\x4f\xdf\xfb\x83\x23\x7f\xf8\xd5\xbf\x7d\x34\xdd\x7d\x7d\x76\xba\xef\xbf\xbc\xf1\x93\x89\x7f\xb9\xd7\x6b\xcf\x33\x7d\xe9\xb4\x29\x00\x65\x59\xce\x1b\xd7\x4b\xe6\x5a\x5a\x00\xc0\x91\x65\xb4\x99\x64\xc2\x62\x53\x17\x63\xcc\xdc\x30\xaf\xd9\xf4\x17\xaa\x0b\x45\xe3\xf9\x2b\xac\xe5\xdf\x92\xe3\x6d\x31\xd0\x39\x59\x08\x46\xac\x9b\x07\x36\x9d\x70\x99\xde\xf9\xcb\x38\x28\x4b\x8d\xe7\x66\x2a\xd9\x8c\xb7\x45\x29\xad\x85\xcc\xb9\x32\x41\x8c\x2f\x5f\x09\xa3\x30\x0a\xe3\x64\x3d\x8a\x22\xac\x4d\xcf\x4e\x8e\xfc\x64\x32\xfb\xfe\xd9\xbf\xd8\x9f\x9d\x1c\x9f\xbd\xfa\xd6\xba\x5f\x3a\x85\x49\x69\xa6\xbe\x03\x33\x18\xa4\x4b\x9a\x25\x27\x32\x92\x8a\x18\xae\x1b\xeb\x20\xc8\x8c\x75\x1d\xd0\xed\xb5\x5b\x24\xf3\xb5\x1b\x37\x21\x60\x1a\x1a\x47\x42\x2a\xc5\x9d\x05\xd7\x0c\x57\x92\x15\xa9\x7a\x07\x41\x4b\x48\xa5\xc4\x58\x0c\x16\x52\xbd\xfb\x47\x38\x95\x3d\x9f\xcb\x2a\x30\x55\xac\x1d\xc1\x3d\xac\xec\x06\xe7\x78\x21\xbc\x74\x31\x00\x0c\x62\xb8\xcf\x24\x1f\x34\x97\xe1\xd9\xc7\xe9\xee\xa7\xe9\xbb\x27\xb3\xe3\xc7\xfe\xf9\xe9\x8f\x83\x0f\xff\x9f\x6b\x65\x31\xed\x2d\xe1\x35\x29\xb6\x88\x6d\x3d\x50\x1c\xc6\x1d\x76\x37\xca\x4d\x96\x8a\x20\x68\x6a\x46\xed\x57\x07\x7f\xd5\x14\x05\xf5\x1b\xa7\x2b\x73\x7a\x65\x11\xc4\x4e\xef\x67\x00\x00\x00\xff\xff\xb6\x41\xcd\x56\x24\x03\x00\x00"

func assetsResourcesAmprobeNginxConfDAmprobeConfBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeNginxConfDAmprobeConf,
		"assets/resources/amprobe/nginx/conf.d/amprobe.conf",
	)
}

func assetsResourcesAmprobeNginxConfDAmprobeConf() (*asset, error) {
	bytes, err := assetsResourcesAmprobeNginxConfDAmprobeConfBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/nginx/conf.d/amprobe.conf", size: 804, mode: os.FileMode(420), modTime: time.Unix(1726050479, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeNginxMimeTypes = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x9c\x97\x61\xcf\xe3\x26\x0c\xc7\xdf\xdf\xa7\xe0\xfd\x44\x9f\xd3\x3d\x9d\x6e\xd3\x7d\x1a\x4a\x1c\x42\x8b\x83\x0f\xd3\x84\x75\xda\x77\x9f\x92\xb4\xd7\xa4\x71\x52\x6d\x48\x55\xd3\xf0\x33\xf0\x37\xb6\xa1\x5f\xf2\x5f\x04\xac\xfe\xfe\xa2\x94\x52\x19\x4a\xfe\x68\x32\x06\xb5\xd7\x46\xa0\xc9\xa8\x78\x78\xfa\xf1\xb4\xb4\xcc\xbb\x86\xca\x32\xcf\xf0\xf2\x66\x1e\x55\x1e\xa3\x7b\x34\x0e\x3e\x9c\xaf\x77\x71\xe7\xeb\x39\x7e\x26\x70\x7b\xf8\xd8\x7f\x26\x37\xd9\x18\xa2\xe0\xad\xc9\x3e\xb6\x1f\x67\xd3\x19\xb6\xc9\x53\x5e\xd9\xf0\x9a\x36\x39\xe2\x6f\xa2\x96\xa1\x67\xcd\x27\x66\x19\x57\x69\x70\xcf\xd3\x3f\x68\x72\xb3\xeb\x22\x5c\x78\x9f\x82\xf1\xed\x9e\xe0\x5c\xf2\x0c\xef\xda\xea\xc0\xd7\xf6\x70\xfe\x86\x70\x30\x44\xba\x82\x49\x73\x4c\x77\xad\xa6\x7a\xc1\x7b\x43\x87\x7e\x6b\x45\xfd\x62\x31\x45\xdb\x88\x14\x5b\x68\x57\x3e\x9c\x5a\x93\xed\x5d\xeb\xb4\x5b\xd4\xee\x6e\x96\xa2\xd6\xcd\x37\x37\xfb\x7a\x37\x18\xb2\xaf\x87\xcf\x22\x20\x7e\x49\x38\x21\x89\x0a\x4e\x48\x73\xbe\x68\x6f\xe3\x8e\x47\xbd\x8d\x4b\xfc\xbc\xab\xe1\xbc\x54\x50\x34\xb2\xde\x58\xc9\xd0\x5e\x16\xc3\x9d\xdb\x88\x9a\xa9\x71\xe7\x86\xcf\x6d\x6e\xd3\xc3\x69\x73\xf8\x51\x30\x9c\xe8\xbe\x09\xf3\x00\xad\x63\x9b\x75\x1f\x05\x07\x0f\x2f\xe5\x74\xd1\x26\xd9\xc6\x77\xf0\x22\xd9\x24\xd5\x9b\xa4\xc0\x24\xc1\x8c\xb7\x9c\x3b\xf4\xac\x79\x34\x56\x9f\x7c\xdb\x40\x39\x7e\x5d\xf2\xcd\xcf\x22\xe0\xdc\xc7\x54\x49\xc3\x57\xd1\xae\x71\xaa\xb6\xe2\x89\x2a\x41\x33\x45\xce\x72\x89\x20\x56\x40\xac\x8c\x17\x32\x3f\x6f\xcd\x91\xb2\x30\xc7\x10\xaf\xc3\x6f\x38\x20\x81\xbb\xa6\xe7\xe6\xe3\xe7\xf5\x0f\x99\x47\xd6\x50\x2c\xbc\xc4\x49\x09\x42\xdd\xba\xe3\xc3\x6e\xc7\xd3\x19\xec\x53\x09\xc4\xbc\x89\x53\xec\x21\x51\xf4\xb3\xbc\x26\xda\xc0\xef\xf5\xc2\x2e\x17\x33\xbc\x91\x79\x17\xa3\x0b\xa0\xc1\xa4\xdc\x1c\x2e\x18\xa6\x80\xbf\x3c\x0a\xcb\x1b\xfc\x36\x0d\x7f\xc1\xdb\x1a\x2f\xfa\xfb\x6d\xac\x48\x09\x98\x61\x1e\x15\xdf\x45\xda\x46\x1b\x8d\xb0\x4f\xf6\x91\xf2\x4b\x7c\x9e\x01\xba\x7a\x96\xa6\xb3\x49\x95\x97\x52\xe6\x6e\x72\x6e\x03\xe9\xda\x87\x59\xda\x0c\xaf\x24\x1e\xcd\x05\x18\xc2\x2a\x80\xd2\x55\x48\x95\xa2\x09\x92\x58\x2b\x28\x28\x12\xce\xa4\xa2\xc9\x87\x28\x95\x6a\x4a\x56\x51\x75\x92\x4c\x92\x49\xa2\x4f\x93\x94\xed\x45\x27\xa8\x1a\x93\x35\x19\x7b\x31\x0e\x34\x9a\xd6\x38\x48\x4a\x25\x79\x41\x0c\xd2\x06\x28\xc5\x60\x44\xbc\x89\xf6\xd2\x9b\x0e\x74\x1d\x0c\x37\x4f\xbc\x17\xdd\xcf\xf9\x5a\xd7\x7e\x2d\x98\xbd\x10\xcb\x45\x67\x2b\x57\xde\xe1\x7d\xbe\x48\x16\xe5\xf7\xaf\x7f\x6a\x6b\xb4\x85\xb4\x98\xa5\x82\xa4\x08\x50\xd9\x24\x4e\x54\xc8\xb7\x9c\x4d\x78\x9d\xae\x90\x50\x4f\xca\x70\xff\x12\x4f\x85\xf2\xbc\x99\x2d\x0c\x98\x6a\xf9\x14\x19\x7a\xd6\xfc\xcd\x6f\x9d\x1f\x37\x2f\x9d\x1c\xd1\x66\xc8\x9a\x73\x02\x83\x4b\xfe\xe4\x5b\x05\x05\x54\x15\x84\x65\x6d\x9b\x55\x20\x44\xde\x0e\x8e\xc2\x6d\x6e\x1b\xf7\x1c\x95\xff\x6f\x26\xc8\x5e\x21\x93\x42\x46\x41\xff\x50\x95\x22\x41\x5b\x30\xd4\x31\xa1\xc9\xac\x63\x5d\x7b\x0b\x55\xb4\x57\x84\x36\x1f\x86\x33\x89\x52\xb4\xc0\xec\x5b\x87\xe1\xf0\xe8\x51\xd3\xc1\x24\x1c\x64\xef\x07\x65\x4a\x60\x2a\x6e\x00\x32\x86\xc3\xf8\x3d\xdb\xd9\xc0\xff\x6b\xd0\x21\xad\xa1\xcd\x23\x8e\x61\xf1\x73\x2c\xf9\xe5\xa1\xff\x5a\xf9\xf8\x81\xbe\xf2\x1b\xa1\x32\xf9\xcd\x57\x6a\x64\x2e\xbf\x8a\xc3\x64\xf7\xe6\x92\x8e\xf4\x39\xc7\xa3\xdb\xbf\x25\x46\xe7\xe6\x78\xd1\x78\x94\xab\xc8\x7d\xf4\xa3\x59\xe2\x09\x4c\x18\x9f\x45\x3c\x99\xbb\xe6\xce\x57\x10\x3f\x3e\x1d\xed\x5e\xaf\xc6\xfe\x4f\x77\x2f\xe7\x93\x0d\xd2\xb7\x8d\x0b\xf1\xd4\x32\x2f\xe9\xe3\xae\x5c\xa4\xe3\x12\x7f\xe7\x4c\x70\x0a\x1f\xff\x78\x26\x9b\x9f\x57\x6f\x2f\xd9\x23\x6c\xd9\xc4\x6e\x8e\xf7\x70\xc2\xbd\x29\x86\xfe\x39\x5f\x74\x1d\xba\x1d\xbe\x0e\xdd\x12\xc7\xe3\x1e\x8e\xc7\x57\x7c\xf7\xca\x8d\xad\x7b\xc1\x59\x1b\xde\xfc\xe3\x60\xb8\x28\xc3\xf5\xca\xa4\xc7\xcd\x35\xf5\xf8\xba\x20\x1e\x9f\xb6\x66\xe8\xfc\x8f\x2f\xff\xfc\x1b\x00\x00\xff\xff\xc3\xd7\x35\x80\x74\x0f\x00\x00"

func assetsResourcesAmprobeNginxMimeTypesBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeNginxMimeTypes,
		"assets/resources/amprobe/nginx/mime.types",
	)
}

func assetsResourcesAmprobeNginxMimeTypes() (*asset, error) {
	bytes, err := assetsResourcesAmprobeNginxMimeTypesBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/nginx/mime.types", size: 3956, mode: os.FileMode(420), modTime: time.Unix(1726068688, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

var _assetsResourcesAmprobeNginxNginxConf = "\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x74\x52\xdd\x8a\xe3\x3c\x0c\xbd\xf7\x53\x88\x10\x28\x7c\x30\xcd\x7c\xa5\x3b\x37\x79\x94\x65\x31\x1e\xfb\xa4\x63\xc6\x7f\x2b\x2b\x6d\xb3\xcb\xbe\xfb\xe2\x26\x1d\x86\x61\xab\x2b\x45\xe7\x48\xca\x39\xd6\x25\xf3\x3b\x58\x17\xce\x16\xb5\xa2\xd2\x61\x54\xce\x20\xe6\x44\x79\x9a\x46\xa5\xc0\x9c\x59\x87\x7c\x22\xaa\xe2\xc0\x4c\x17\xc3\x69\x54\xaa\x78\x47\x5b\x0c\x67\xc3\x03\xcf\x69\x48\x27\x9f\xae\xfb\xe2\x5d\x6b\x3c\x23\x49\xa5\xdf\xaa\x31\xb6\x35\x36\xa7\x04\x2b\x3e\xa7\x4a\xf4\xff\xf3\xe1\x38\xaa\x3f\x4a\xbd\x89\x94\x8d\xe7\x93\x0d\xb3\x03\x0d\x10\xbb\x4e\x1b\xa2\x8f\xd8\xcb\x52\x50\xc7\x1b\xc5\x61\x32\x73\x10\xdd\x4a\x64\x4a\x09\xde\x9a\x36\x71\xc8\x56\x20\x4f\x55\x18\x26\x8e\xea\xc6\x0d\xf9\xa4\xa7\xcc\xd1\x08\x45\xe3\x13\xed\x7a\x46\xcc\x02\x6d\x9c\x63\x7a\xa2\xfb\xe7\x5c\xc1\xf4\xbd\x17\x1f\xa1\x43\xb6\x26\xfc\xa0\xae\x67\xfc\x9c\x51\xa5\xa3\x9d\xa2\x7f\xc4\xae\xaf\x62\x64\xae\xd4\xbf\x66\xb7\xe8\xd7\x45\x50\x75\x45\x12\xea\xfa\xa6\x48\x33\x26\x30\xb8\x7b\xd0\xbe\xb1\xda\x6a\x6d\x4e\x48\xd2\xdd\x1b\xaf\xed\x9f\x2f\x86\x1d\x5c\xcb\xba\xdd\x2a\xa6\x22\xb9\xc9\x07\x50\x4e\xab\x13\x62\x8b\x4e\xb9\xcc\xf5\xed\x4b\xc9\x21\x98\xe5\xa3\xf6\x0e\x14\x13\xfc\x19\xba\xe9\xcb\xb3\xd0\xcb\xb7\xcd\x9f\xc2\xf9\xba\xdc\x5f\xe5\x03\x3e\x1c\x9f\x37\xaf\x57\xbc\x2d\x7e\x08\x32\xcc\x57\xf0\x86\xda\xe0\x91\x44\x47\x73\xd5\x37\x7f\xaa\xff\x05\x7a\x39\xc6\xf1\x33\xba\x3a\x37\x4f\x13\xf8\x13\xe1\xd1\x25\xd8\x9c\xa6\xbd\x1b\xfe\xdb\xb7\xa4\x5d\xce\xdf\x00\x00\x00\xff\xff\x70\x8c\xc5\xd0\xbd\x02\x00\x00"

func assetsResourcesAmprobeNginxNginxConfBytes() ([]byte, error) {
	return bindataRead(
		_assetsResourcesAmprobeNginxNginxConf,
		"assets/resources/amprobe/nginx/nginx.conf",
	)
}

func assetsResourcesAmprobeNginxNginxConf() (*asset, error) {
	bytes, err := assetsResourcesAmprobeNginxNginxConfBytes()
	if err != nil {
		return nil, err
	}

	info := bindataFileInfo{name: "assets/resources/amprobe/nginx/nginx.conf", size: 701, mode: os.FileMode(420), modTime: time.Unix(1726068160, 0)}
	a := &asset{bytes: bytes, info: info}
	return a, nil
}

// Asset loads and returns the asset for the given name.
// It returns an error if the asset could not be found or
// could not be loaded.
func Asset(name string) ([]byte, error) {
	cannonicalName := strings.Replace(name, "\\", "/", -1)
	if f, ok := _bindata[cannonicalName]; ok {
		a, err := f()
		if err != nil {
			return nil, fmt.Errorf("Asset %s can't read by error: %v", name, err)
		}
		return a.bytes, nil
	}
	return nil, fmt.Errorf("Asset %s not found", name)
}

// MustAsset is like Asset but panics when Asset would return an error.
// It simplifies safe initialization of global variables.
func MustAsset(name string) []byte {
	a, err := Asset(name)
	if err != nil {
		panic("asset: Asset(" + name + "): " + err.Error())
	}

	return a
}

// AssetInfo loads and returns the asset info for the given name.
// It returns an error if the asset could not be found or
// could not be loaded.
func AssetInfo(name string) (os.FileInfo, error) {
	cannonicalName := strings.Replace(name, "\\", "/", -1)
	if f, ok := _bindata[cannonicalName]; ok {
		a, err := f()
		if err != nil {
			return nil, fmt.Errorf("AssetInfo %s can't read by error: %v", name, err)
		}
		return a.info, nil
	}
	return nil, fmt.Errorf("AssetInfo %s not found", name)
}

// AssetNames returns the names of the assets.
func AssetNames() []string {
	names := make([]string, 0, len(_bindata))
	for name := range _bindata {
		names = append(names, name)
	}
	return names
}

// _bindata is a table, holding each asset generator, mapped to its name.
var _bindata = map[string]func() (*asset, error){
	"assets/resources/amprobe/configs/config.toml":       assetsResourcesAmprobeConfigsConfigToml,
	"assets/resources/amprobe/configs/model.conf":        assetsResourcesAmprobeConfigsModelConf,
	"assets/resources/amprobe/nginx/cert/fullchain.pem":  assetsResourcesAmprobeNginxCertFullchainPem,
	"assets/resources/amprobe/nginx/cert/privkey.pem":    assetsResourcesAmprobeNginxCertPrivkeyPem,
	"assets/resources/amprobe/nginx/conf.d/amprobe.conf": assetsResourcesAmprobeNginxConfDAmprobeConf,
	"assets/resources/amprobe/nginx/mime.types":          assetsResourcesAmprobeNginxMimeTypes,
	"assets/resources/amprobe/nginx/nginx.conf":          assetsResourcesAmprobeNginxNginxConf,
}

// AssetDir returns the file names below a certain
// directory embedded in the file by go-bindata.
// For example if you run go-bindata on data/... and data contains the
// following hierarchy:
//     data/
//       foo.txt
//       img/
//         a.png
//         b.png
// then AssetDir("data") would return []string{"foo.txt", "img"}
// AssetDir("data/img") would return []string{"a.png", "b.png"}
// AssetDir("foo.txt") and AssetDir("notexist") would return an error
// AssetDir("") will return []string{"data"}.
func AssetDir(name string) ([]string, error) {
	node := _bintree
	if len(name) != 0 {
		cannonicalName := strings.Replace(name, "\\", "/", -1)
		pathList := strings.Split(cannonicalName, "/")
		for _, p := range pathList {
			node = node.Children[p]
			if node == nil {
				return nil, fmt.Errorf("Asset %s not found", name)
			}
		}
	}
	if node.Func != nil {
		return nil, fmt.Errorf("Asset %s not found", name)
	}
	rv := make([]string, 0, len(node.Children))
	for childName := range node.Children {
		rv = append(rv, childName)
	}
	return rv, nil
}

type bintree struct {
	Func     func() (*asset, error)
	Children map[string]*bintree
}

var _bintree = &bintree{nil, map[string]*bintree{
	"assets": &bintree{nil, map[string]*bintree{
		"resources": &bintree{nil, map[string]*bintree{
			"amprobe": &bintree{nil, map[string]*bintree{
				"configs": &bintree{nil, map[string]*bintree{
					"config.toml": &bintree{assetsResourcesAmprobeConfigsConfigToml, map[string]*bintree{}},
					"model.conf":  &bintree{assetsResourcesAmprobeConfigsModelConf, map[string]*bintree{}},
				}},
				"nginx": &bintree{nil, map[string]*bintree{
					"cert": &bintree{nil, map[string]*bintree{
						"fullchain.pem": &bintree{assetsResourcesAmprobeNginxCertFullchainPem, map[string]*bintree{}},
						"privkey.pem":   &bintree{assetsResourcesAmprobeNginxCertPrivkeyPem, map[string]*bintree{}},
					}},
					"conf.d": &bintree{nil, map[string]*bintree{
						"amprobe.conf": &bintree{assetsResourcesAmprobeNginxConfDAmprobeConf, map[string]*bintree{}},
					}},
					"mime.types": &bintree{assetsResourcesAmprobeNginxMimeTypes, map[string]*bintree{}},
					"nginx.conf": &bintree{assetsResourcesAmprobeNginxNginxConf, map[string]*bintree{}},
				}},
			}},
		}},
	}},
}}

// RestoreAsset restores an asset under the given directory
func RestoreAsset(dir, name string) error {
	data, err := Asset(name)
	if err != nil {
		return err
	}
	info, err := AssetInfo(name)
	if err != nil {
		return err
	}
	err = os.MkdirAll(_filePath(dir, filepath.Dir(name)), os.FileMode(0755))
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(_filePath(dir, name), data, info.Mode())
	if err != nil {
		return err
	}
	err = os.Chtimes(_filePath(dir, name), info.ModTime(), info.ModTime())
	if err != nil {
		return err
	}
	return nil
}

// RestoreAssets restores an asset under the given directory recursively
func RestoreAssets(dir, name string) error {
	children, err := AssetDir(name)
	// File
	if err != nil {
		return RestoreAsset(dir, name)
	}
	// Dir
	for _, child := range children {
		err = RestoreAssets(dir, filepath.Join(name, child))
		if err != nil {
			return err
		}
	}
	return nil
}

func _filePath(dir, name string) string {
	cannonicalName := strings.Replace(name, "\\", "/", -1)
	return filepath.Join(append([]string{dir}, strings.Split(cannonicalName, "/")...)...)
}
