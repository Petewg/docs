---
layout: post
title: AAdd
---

# AAdd()

Add a new element to the end of an array

#### Syntax

AADD( *aTarget*, *xValue* )

#### Arguments

*aTarget* is the array to which a new element is to be added.

*xValue* is the value assigned to the new element.

#### Returns

AADD() evaluates *xValue* and returns its value. If *xValue* is not specified, AADD() returns NIL.

#### Description

This function dynamically increases the length of the aArray by adding one new element to the end of the array and optionally stores the value *xValue* to that newly created element.

*xValue* may be of an data type, including an array reference pointer, which in turn may be stored to an array's subscript position.

#### Examples

* This example adds 10 numbers to an array.

``` 
PROCEDURE Main()

   LOCAL aArray := {}, i

   FOR i := 1 TO 10
      AAdd( aArray, i )
   NEXT

   QOut( Len( aArray ) )

   RETURN
```

##### Output:

``` 
harbour@harbour:~$ hbmk2 example.prg -run
Harbour 3.2.0dev (r2001131815)
Copyright (c) 1999-2020, https://harbour.github.io/
Compiling 'example.prg'...
Lines 11, Functions/Procedures 1
Generating C source output to '/tmp/hbmk_0us1cs.dir/example.c'... Done.
   
        10                                                                      
harbour@harbour:~$ 
```

---