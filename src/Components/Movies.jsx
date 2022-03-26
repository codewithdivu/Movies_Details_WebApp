import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  // constructor(props) {
  //   super(props);
  //   console.log("constructor is rendered");
  // }

  componentDidMount() {
    // console.log("Didmount is rendred");
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  // componentDidUpdate() {
  //   console.log("DidUpdate is rendred");
  // }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    // console.log("page", page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    // console.log(path);

    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    console.log("Render method rendred");

    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (this.state.movies.length === 0) {
      return <h1>There are no Movies left in table</h1>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            // textProperty="name"
            // valueProperty="_id"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
          <Link
            to="/movies/new"
            style={{ marginBottom: 20 }}
            className="btn btn-primary"
          >
            New Movie
          </Link>

          <h2 className="m-3">there are {totalCount} are left</h2>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
