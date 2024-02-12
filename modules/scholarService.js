const articleData = require("../data/articles.json")
const journalData = require("../data/journals.json")
let articles = []

function initialize() {
    // do something here to combine the themeID to the lego sets array data 

    return new Promise((resolve, reject) => {
        articles = articleData
        if (articles) {
            resolve("done")
        } else {
            reject("bad")
        }
    })
}

function getArticles() {
    return new Promise((resolve, reject) => {
        if (articles) {
            resolve(articles)
        } else {
            reject("no article data")
        }
    })
}

function getArticleByID(id) {
    return new Promise((resolve, reject) => {
        let foundArticle = articles.find(((article) => article.id == id))
        if (foundArticle) {
            resolve(foundArticle)

        } else {
            reject("article not found by "+id)
        }
    })
}

module.exports = {
    initialize,
    getArticles,
    getArticleByID
}