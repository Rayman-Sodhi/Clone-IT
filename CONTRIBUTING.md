## Contribution Guidelines
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blue?style=for-the-badge)

### Never made an open source contribution before? Wondering how contributions work in our project? Here's a quick rundown!

<img align="right" width="300" src="https://user-images.githubusercontent.com/75829770/158055651-fb9caff1-2b91-4711-8c54-6577b64f04f2.jpeg" alt="fork this repository" />

## Fork this repository

* Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://user-images.githubusercontent.com/75829770/158056061-204eedb3-482b-47f0-8d57-45755bb69bcd.jpeg" alt="clone this repository" />

* Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). 

<img align="right" width="300" src="https://user-images.githubusercontent.com/75829770/158056350-900959ef-c826-469f-bb35-aff4f9d95c71.jpeg" alt="clone this repository" />

For example:

```
git clone https://github.com/name/Clone-IT.git
```

where `name` is your GitHub username. Here you're copying the contents of the Clone-IT repository on GitHub to your computer.

## Navigate to the project directory
* After cloning the project in your computer, navigate to the project file using the command below.
```
cd clone-it
```

## Add a reference(remote) to the original repository

```
git remote add upstream https://github.com/Rayman-Sodhi/Clone-IT.git 
```

* Check the remotes for this repository.

```
git remote -v
```


* Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

## Create a new branch

```
git checkout -b <your_branch_name>
```


* Perfom your desired changes to the code base.


* Track your changes:heavy_check_mark: .

```
git add . 
```


* Commit your changes .

```
git commit -m "Relevant message"
```


* Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```


* To create a pull request, click on `compare and pull requests`.


* Add an appropriate title and description to your pull request explaining your changes and efforts done.


* Click on `Create Pull Request`.


* Congrats :exclamation: You have made a PR to the Clone-IT :boom: . Wait for your submission to be accepted and your PR to be merged.


* Wait for the pull request to be reviewed by a maintainer. Make changes to the pull request if the reviewing maintainer recommends them.


* Celebrate  🥳  your success after your pull request is merged!
