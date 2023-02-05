package main

import (
	"net/http"
	"server/models"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneMovie(rw http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.errorJSON(rw, err)
		return
	}

	movie := models.Movie{
		ID:          id,
		Title:       "Title",
		Description: " desc",
		Year:        2022,
		ReleaseDate: time.Date(2009, 01, 01, 01, 0, 0, 0, time.Local),
		Runtime:     111,
		Rating:      5,
		MPAARating:  "PG-88",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	err = app.writeJSON(rw, http.StatusOK, movie, "movie")
}
