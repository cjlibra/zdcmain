package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./"))))
	fmt.Println("程序启动，开始监听80端口")

	for {
		err := http.ListenAndServe(":80", nil)
		if err != nil {
			//log.Fatal("ListenAndServer: ", err)
			fmt.Println("ListenAndServer: ", err)
			

		}
	}

}
