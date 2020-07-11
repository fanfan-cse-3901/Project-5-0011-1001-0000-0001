# Project 5
### JavaScript Calculator

### Roles
* Overall Project Manager: Yifan Yao
* Coding Manager: Kevin Dong
* Testing Manager: Troy Stein
* Documentation Manager: Prachiti Garge
* Honorary Mention: Amanda Cheng

### Contributions
#### Core functionality
* Calculator HTML - Yifan Yao, Amanda Cheng, Prachiti Garge
* Calculator CSS - Yifan Yao
* User input - Yifan Yao
* Memory - Amanda Cheng
* Input parsing - Kevin Dong
* Calculations - Prachiti Garge

#### Extra functionality
* Additional operations - Prachiti Garge
* PEMDAS - Kevin Dong
* Dynamic history and memory buffer - Amanda Cheng
* Degree-Radian Switch - Troy Stein
* User-Input display - Yifan Yao

### Testing 
* Unit testing with using console log and running test with 'node [file name]'. 
  Everyone conducted unit testing for the Javascript. The unit test files are on test directory.
* Integration testing  with operations and number buttons through html button clicking.
* System testing: created a testing plan with all the operations, sequence of operations, error cases, etc.
  There is a system testing plan in the test directory.

### User Manual
* Upon launching index.html, a web-page of a calculator will show with multiple operations, two input boxes 
  on top, with a bordered buffer on the right. The two input boxes have upper and lower display. The upper display
  shows the expression values while the lower display shows the expression's resulted value. Upon initial launch,
  there will be history buffer that shows history of operations from upper display and lower display. The lower 
  display, which is the final resulted value, will show bolded in history buffer. The history buffer has a capacity
  of 5 expression-value pairs. After doing more than 5 operations on calculator, the pairs will be saved in a FIFO 
  order where the first stored pair will be removed.
* If user selects a memory operation, the history buffer will be replaced by a memory buffer which shows the 
  current value in memory buffer. If user selects any other operation, the buffer changes back to history buffer again.
* Users can also type in numbers to lower display.

IMPORTANT NOTE: Like other calculators, it can calculate precisely to a maximum integer value threshold. After that,
overflow occurs and the final result only outputs to its approximate value and ignore certain digits such as ones, tens,
place, etc.