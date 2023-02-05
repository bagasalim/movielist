package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/julienschmidt/httprouter"
)

const version = "1.0.1"

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"env"`
	Version     string `json:"version"`
}

type application struct {
	config config
	logger *log.Logger
}

func main() {
	var cfg config

	flag.IntVar(&cfg.port, "port", 4000, "Server port listen on ")
	flag.StringVar(&cfg.env, "env", "development", "Application environtment (development | production)")
	flag.Parse()

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	app := &application{
		config: cfg,
		logger: logger,
	}

	fmt.Println("Server is running...")

	serve := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Println("Starting server on port ", cfg.port)

	err := serve.ListenAndServe()
	if err != nil {
		log.Println(err)
	}
}
