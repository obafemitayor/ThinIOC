//import { MongoDBRepository } from '~/Repository/mongoRepository';

var registry = [{ For: "IUser", Use: new NhibernateRepository() }];