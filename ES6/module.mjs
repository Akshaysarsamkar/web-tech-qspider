//  this is main js file ---> import the code 

// import statement should be a top
// 2 way to import statement 

// 1] named import : import multiset of data 
        //  syntax : import{var-name1,var-name2} from 'filePath'
        // rules 
            //   1] variable name should be same as the variable name which we have used 
            //   2] path of exported file should be extention with .js 

            import {stu1,stu2,developer,greeting} from "./App1.js";
            import { emp,user,multipleTable } from "./App2.js";
            console.log(stu1)
            console.log(stu2)
            console.log(developer)
            greeting(developer)


            multipleTable()
            user('Arohi')
            console.log(emp)


// 2] default import :- export only one set of data 
//    syntax : import varname from 'pathofexternalfile';

     import numbers from './App1.js'
     console.log(numbers)