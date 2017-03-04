import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import App from '../imports/src/components/app'

const MarkdownFile = async (filename) => {
  let d = await new Promise((resolve, reject) => {
    try {
      Meteor.call('markdown.get.async', { filename }, (err, res) => {
        if (err) reject('Something went wrong')
        resolve(res)
      })
    } catch(err) {
      throw new Meteor.Error(err);
    }
  })
  return await d
}

const getSVG = async (path) => {
  return await new Promise((resolve, reject) => {
    Meteor.call('svg.get', { path }, (err, res) => {
      if (err) reject('Something went wrong')
      resolve(res)
    })
  })
}

let appState = {
  projects: [
    {
      id: 1,
      name: "Again",
      description: "Centered around traditional (mostly piano-based) jazz music.",
      image: "/img/again.png",
      url: "http://soundcloud.com/jiku/sets/again"
    },
    {
      id: 2,
      name: "Sunnevak",
      name: "Sunparser",
      name: "Spacet",
      name: "Spacers",
      name: "Spaced",
      name: "Probal",
      name: "Probes",
      name: "Sunparser",
      description: "For stuff which tends to sound electronic, mechanical, etc. 80-90's tracker and game music, jungle, D&B, breakcore, etc.",
      image: "/img/electronic.png",
      url: "http://jiku.ca/micronertia"
    },
    {
      id: 3,
      name: "Empale",
      name: "Baldrum empales",
      name: "Det hatske i deg",
      name: "Vacant",
      name: "Path of least resistance",
      name: "Encryptable",
      name: "Crispin",
      name: "Creatase",
      name: "Direkte ufint",
      name: "Dyrkelse",
      name: "Dyrket fra tegn",
      name: "Dysset",
      name: "Dyrket ned",
      name: "Sunnsvak",
      name: "Sunnsvakt",
      name: "Åndsvakt",
      name: "Dissektert",
      name: "Dyrkedyret",
      name: "Dyrdyrket",
      description: "Progressive space metal with a folk tinge! Centered around harder, more warped music.",
      image: "/img/metal.png",
      url: "http://jiku.ca/dyrdyrket"
    },
    {
      id: 4,
      name: "Prescient",
      name: "Forsent",
      name: "Prezent",
      name: "Precenter",
      name: "Precentra",
      name: "Presentrisk",
      name: "Presentra",
      name: "Presentric",
      name: "Presentry",
      name: "Presentries",
      name: "Presense",
      name: "Presenter",
      name: "Representable",
      name: "Penitent",
      name: "Assembly",
      name: "Sunuskilu",
      name: "Massembler",
      description: "Presentation system for sites, apps, etc. Open source (Node-based). Used for most of what's on here.",
      image: "/img/prescient.png",
      url: "http://jiku.ca/massembler",
      tags: ["design", "present", "show", "share"]
    },
    {
      id: 5,
      name: "Biola",
      name: "Senex",
      name: "Sen-ESC",
      name: "Vetus",
      name: "VekioESC",
      name: "Vesc",
      description: "Set of processors to aid in studying biosenescence at different ontological levels. Making them consumeable through a free, open (GraphQL) API, and/or open sourcing under an MIT license.",
      tags: ["synthetic biology", "molecular biology", "cellular biology", "microbiology", "systems biology", "bioinformatics"]
    },
    {
      id: 6,
      name: "Nutrica",
      name: "Mindy",
      name: "Nutral",
      name: "Nutrack",
      name: "Nutrace",
      description: "Advanced nutrient metabolic logg- and interpreter for a subset of mammalian (sub)species, including Homo sapiens sapiens and common model organisms (Caenorhabditis elegans, Drosophilia). Used in conjunction with biomodeling. Closed source for now, this will probably be commercialized.",
      image: "/img/nutrica.png",
      url: "http://jiku.ca/nutrica"
    }
  ],
  button: {
    name: 'Again'
  },
  parser: {
    loading: {
      state: true
    },
    markdown: undefined
  }
}

const setup = async () => {
  const render = appState => App.render(document.getElementById('app'), appState)

  render(appState)

  // setInterval(() => {
  //   render(appState)
  // }, 1000)

  appState.markdown = await MarkdownFile('Sweetie')
  render(appState)
  // const SVG = await getSVG('rocket.svg')
}

Meteor.startup(() => {
  setup()
})
