var db = require('../db');
var axios = require('axios');

var fetchAllShows = function(req, res) {
  db.Show.findAll({})
    .then(function(data){
      console.log('here is server data: ', data)
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
      console.log('error in controller ', err);
    })
};
var addShow = function(req, res) {
  axios.get(`http://api.tvmaze.com/search/shows?q=${req.body.title}`)
    .then(function(response){
      db.Show.findOrCreate({
        where: {
          title: response.data[0].show.name,
          genre: response.data[0].show.genres.join(', '),
          rating: response.data[0].show.rating.average,
          image: response.data[0].show.image.medium
        }
      })
        .spread(function(newShow, created) {
          if (created) {
            res.status(201).send(newShow);
            console.log('show added!', newShow);
          } else {
            res.status(500).send('show already in database');
            console.log('show already in database');
          }
        })
        .catch(function(err) {
          res.status(500).send(err);
          console.log('error in adding to database', err);
        })
    })
    .catch(function(err) {
      res.status(500).send(err);
      console.log('error in hitting api:, ', err);
    }) 
};
var editRating = function(req, res) {
  db.Show.update(
    {rating: req.body.rating},
    {where: 
      {
        title: req.body.title,
      }
    }
  )
    .then(function(affectedRows) {
      console.log(`${affectedRows} rows updated`);
      db.Show.findAll({
        where: {
          title: req.body.title
        }
      })
        .then(data => {
          res.status(200).json(data[0].dataValues);
          console.log('sending updated data to client', data[0].dataValues);
        })
        .catch(err => {
          res.status(500).send(err);
          console.log('error in sending updated data to client');
        })
    })
    .catch(function(err) {
      res.status(500).send(err);
      console.log('error in updating row ', err);
    })
};
var deleteShow = function(req, res) {
  db.Show.destroy({
    where: {
      title: req.body.title
    }
  })
    .then(function(affectedRows) {
      res.status(200).send(`${affectedRows} rows deleted`);
      console.log(`${afftectedRows} deleted`);
    })
    .catch(function(err) {
      res.status(500).send(err);
      console.log(`error in deleting row `, err);
    })
}

module.exports = {
  fetchAllShows: fetchAllShows,
  addShow: addShow,
  editRating: editRating,
  deleteShow: deleteShow
}