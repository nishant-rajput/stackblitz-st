const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upper = name.toUpperCase();
  res.send(upper);
});

app.get('/fullName', (req, res) => {
  let first = req.query.firstName;
  let last = req.query.lastName;
  let fullName = first + ' ' + last;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let mon = req.query.month;
  let yr = req.query.year;
  let dateFull = mon + ', ' + yr;
  res.send(dateFull);
});

app.get('/greeting', (req, res) => {
  let nm = req.query.name;

  let wish = 'Namaste, ' + nm + '!';
  res.send(wish);
});
app.get('/email', (req, res) => {
  let usr = req.query.username;
  let dom = req.query.domain;

  let ema = usr + '@' + dom;
  res.send(ema);
});

app.get('/address', (req, res) => {
  let stree = req.query.street;
  let cit = req.query.city;
  let sta = req.query.state;

  let wish = stree + ', ' + cit + ', ' + sta;
  res.send(wish);
});

app.get('/total-distance', (req, res) => {
  let d1 = parseFloat(req.query.distance1);
  let d2 = parseFloat(req.query.distance2);

  let totalDistance = d1 + d2;
  res.send(totalDistance.toString());
});

app.get('/total-time', (req, res) => {
  let t1 = parseFloat(req.query.time1);
  let t2 = parseFloat(req.query.time2);
  let t3 = parseFloat(req.query.time3);

  let totalTime = t1 + t2 + t3;
  res.send(totalTime.toString());
});

app.get('/average-speed', (req, res) => {
  let td = parseFloat(req.query.totalDistance);
  let tt = parseFloat(req.query.totalTime);

  let speedTotal = td / tt;
  res.send(speedTotal.toString());
});

app.get('/eta', (req, res) => {
  let dist = parseFloat(req.query.distance);
  let spee = parseFloat(req.query.speed);

  let time = dist / spee;
  res.send(time.toString());
});

app.get('/total-calories', (req, res) => {
  let d1 = parseFloat(req.query.duration1);
  let d2 = parseFloat(req.query.duration2);
  let cpm = parseFloat(req.query.caloriesPerMinute);

  let totalCalories = (d1 + d2) * cpm;
  res.send(totalCalories.toString());
});

app.get('/interest-earned', (req, res) => {
  let pr = parseFloat(req.query.principal);
  let rt = parseFloat(req.query.rate);
  let tm = parseFloat(req.query.time);

  let interest = (pr * rt * tm) / 100;
  res.send(interest.toString());
});

app.get('/check-number', (req, res) => {
  let num = parseFloat(req.query.number);
  if (num >= 0) {
    res.send('Number is positive');
  } else {
    res.send('Number is negative');
  }
});

app.get('/check-even-odd', (req, res) => {
  let num = parseFloat(req.query.number);
  if (num % 2 == 0) {
    res.send('Number is even');
  } else {
    res.send('Number is odd');
  }
});

app.get('/check-login', (req, res) => {
  let num = req.query.isLoggedIn === 'true';
  if (num == true) {
    res.send('User is logged in');
  } else {
    res.send('User is not logged in');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
