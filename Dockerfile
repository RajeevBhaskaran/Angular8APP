#Getting the Node for the angular app to run
FROM node:12.15.0


#Creating the app directory
#setting work directory as newly created directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#installing angular cli for angular command processing
RUN npm install -g  @angular/cli@8.3.6
#copying the files in app
COPY . /usr/src/app
#running the command 4200 host in particular port
CMD ng serve --host 0.0.0.0 --port 4200
