# Barista App
A simple full stack POS register app for a fictional coffee shop that able to take customers orders by the cashiers and baristas able to view those orders and mark them as complete when the task is finished.

*This version has automated voice feature telling the customer their order is ready.

**Link to project:** https://github.com/zjacobsdev/barista-app

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Passport

## How to use:
### Installation

1. Clone repo
2. run `npm install`

### Usage

1. run `node server.js`
2. Navigate to `localhost:8088`

## Optimizations

- Integrate automated voice to call customer when order is ready ( currently under voice branch)

- Improve UI design: Have buttons to input food/drink order


## Lessons Learned:

This project didn't really have much front end logic but more backend making sure the routes are connected and that the database is being updated correctly. 

## **BUGS: 

The voice runs through the whole list of completed order every three seconds which is not ideal. The voice just need to say the last compeleted order. A possible solution is to create a seperate collection in the database solely for completed orders and retrieve the last order from that collection when the bartista presses the complete button.

## Credit

Modified from Scotch.io's auth tutorial


