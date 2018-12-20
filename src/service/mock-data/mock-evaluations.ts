import { Evaluation } from '../../model/evaluation';
import { STUDENTS } from './mock-students';
import { ASSIGNMENTS } from './mock-assignments';
import { Guid } from 'guid-typescript';

export const EVALUATIONS: Evaluation [] = [
    new Evaluation(7.5,0.5,new Date("27 July 2016 09:30:00"), "Good", STUDENTS[0].id, ASSIGNMENTS[0].id),
    new Evaluation(5.5,0.5,new Date("12 August 2017 13:30:00"), "Insuficient", STUDENTS[2].id, ASSIGNMENTS[1].id),
    new Evaluation(7.5,0.5,new Date("10 October 2017 13:30:00"), "Bad", STUDENTS[3].id, ASSIGNMENTS[2].id),
    new Evaluation(7.0,0.5,new Date("10 September 2015 13:30:00"), "Good", STUDENTS[4].id, ASSIGNMENTS[3].id),
    new Evaluation(6.0,0.5,new Date("06 June 2016 13:09:00"), "Good", STUDENTS[4].id, ASSIGNMENTS[4].id),
    new Evaluation(4.0,0.5,new Date("07 June 2015 13:30:00"), "Very Good",STUDENTS[4].id, ASSIGNMENTS[5].id),
    new Evaluation(9.0,0.5,new Date("27 May 2017 07:30:00"), "Average" ,STUDENTS[7].id, ASSIGNMENTS[6].id),
    new Evaluation(5.5,0.5,new Date("12 May 2016 13:30:00"), "Good", STUDENTS[8].id, ASSIGNMENTS[6].id),
    new Evaluation(7.5,0.5,new Date("27 October 2018 13:30:00"), "Very Good", STUDENTS[9].id, ASSIGNMENTS[2].id),
    new Evaluation(8.5,0.5,new Date("13 February 2016 13:30:00"), "Average" ,STUDENTS[10].id, ASSIGNMENTS[3].id),
    new Evaluation(7.5,0.5,new Date("18 January 2015 07:30:00"), "Good", STUDENTS[11].id, ASSIGNMENTS[4].id),
    new Evaluation(6.0,0.5,new Date("19 July 2017 13:07:00"), "Very Good", STUDENTS[11].id, ASSIGNMENTS[5].id),
    new Evaluation(5.5,0.5,new Date("27 August 2017 13:30:00"), "Average", STUDENTS[0].id, ASSIGNMENTS[6].id),
    new Evaluation(6.5,0.5,new Date("21 January 2018 13:30:00"), "Good", STUDENTS[2].id, ASSIGNMENTS[2].id),
    new Evaluation(6.0,0.5,new Date("19 July 2016 13:30:00"), "Very Good",STUDENTS[3].id, ASSIGNMENTS[3].id),
    new Evaluation(4.5,0.5,new Date("30 September 2015 13:30:00"), "Average",STUDENTS[4].id, ASSIGNMENTS[4].id),
    new Evaluation(6.0,0.5,new Date("13 March 2017 13:30:00"), "Insuficient",STUDENTS[5].id, ASSIGNMENTS[5].id),
    new Evaluation(5.5,0.5,new Date("03 April 2015 09:30:00"), "Good", STUDENTS[6].id, ASSIGNMENTS[6].id),
    new Evaluation(7.5,0.5,new Date("05 August 2016 13:07:00"), "Insuficient", STUDENTS[7].id, ASSIGNMENTS[3].id),
    new Evaluation(6.5,0.5,new Date("27 July 2016 13:30:00"), "Good",STUDENTS[8].id,ASSIGNMENTS[4].id),
    new Evaluation(5.5,0.5,new Date("01 November 2017 13:30:00"), "Insuficient", STUDENTS[9].id, ASSIGNMENTS[6].id),
    new Evaluation(8.5,0.5,new Date("15 September 2015 13:30:00"), "Very Good" ,STUDENTS[10].id, ASSIGNMENTS[3].id),
    new Evaluation(5.5,0.5,new Date("01 July 2017 13:30:00"), "Insuficient", STUDENTS[11].id, ASSIGNMENTS[2].id),
    new Evaluation(8.5,0.5,new Date("19 November 2015 13:30:00"), "Good", STUDENTS[0].id, ASSIGNMENTS[4].id),
    new Evaluation(8.5,0.5,new Date("06 September 2015 13:30:00"), "Very Good", STUDENTS[2].id, ASSIGNMENTS[5].id),
    new Evaluation(5.5,0.5,new Date("08 March 2017 13:30:00"), "Insuficient", STUDENTS[3].id, ASSIGNMENTS[5].id),
    new Evaluation(8.5,0.5,new Date("29 February 2015 13:30:00"), "Good", STUDENTS[4].id, ASSIGNMENTS[7].id),
];