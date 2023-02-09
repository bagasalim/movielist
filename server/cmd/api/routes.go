package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app application) routes() http.Handler {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)
	router.HandlerFunc(http.MethodGet, "/movie/:id", app.getOneMovie)
	router.HandlerFunc(http.MethodGet, "/movies", app.getAllMovie)

	router.HandlerFunc(http.MethodGet, "/genres", app.getAllGenre)
	router.HandlerFunc(http.MethodGet, "/genres/:genre_id/movies", app.getMovieByGenre)
	return app.enableCORS(router)
}
