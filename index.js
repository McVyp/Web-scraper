const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const PORT=3000

const a=express()
const url ='https://www.theguardian.com/us'
axios(url)
    .then(response => {
        const b = response.data
        const $ = cheerio.load(b)
        const articles =[]
        $('.fc-item__title', b).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title, url
            })     
        })
        console.log(articles) 
    }).catch(err => console.log(err))
a.listen(PORT, () => console.log(`server is running on ${PORT}`))