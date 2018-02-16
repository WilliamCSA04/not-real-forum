const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/discussions/recents', (req, res) => {
  res.send([{ 
    title: "Title 1",
    categories: "Category 1",
    views: "1",
    commentaries: "Random commentaries",
    tags: "#example",
    createdAt: "16/02/2018",
    creator: "Creator 1",
  }]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));