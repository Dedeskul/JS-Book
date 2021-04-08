const topics = [
  'Design Patterns',
  'Variables',
  'Html',
  'Css',
  'Design',
  'Design Patterns',
  'Variables',
  'Html',
  'Css',
  'Design',
]

const mainContentContainer = document.getElementById('mainContent')

const createtopics = () => {
  topics.forEach((topic) => {
    const topicContainer = document.createElement('div')
    topicContainer.classList.add('mainContentTopicCard')
    mainContentContainer.appendChild(topicContainer)
  })
}

window.onload = function () {
  createtopics()
  console.log(mainContentContainer)
}
