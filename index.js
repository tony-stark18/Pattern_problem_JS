n=prompt("Enter a number: ");
n=Number.parseInt(n);

// Question-1

 /*for(let i=1;i<n+1;i++)
   {
     for (let j=0;j<i;j++)
       {
         let t=i.toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

// Question-2

/*for(let i=n;i>-1;i--)
   {
     for (let j=0;j<i;j++)
       {
         let t=(n+1-i).toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

// Question-3

/*for(let i=1;i<n+1;i++)
   {
     for (let j=0;j<i;j++)
       {
         let t=i.toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

//Question-4

/*for(let i=n;i>-1;i--)
   {
     for (let j=0;j<i;j++)
       {
         let t=(i).toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

// Question-5

/*for(let i=n;i>-1;i--)
   {
     for (let j=0;j<i;j++)
       {
         let t=(n).toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

//Question-6

/*for(let i=1;i<n+1;i++)
   {
     for (let j=0;j<i;j++)
       {
         let t=(i-j).toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

// Question-7

/*for(let i=n;i>-1;i--)
   {
     for (let j=0;j<i;j++)
       {
         let t=(j).toString();
         process.stdout.write(t+" ");
       }
     console.log();
   }*/

// Question-#

/*temp=0
for(let i=1;i<n;i++)
   {
     for (let j=0;j<i;j++)
       {
         let t=(temp+j+1).toString();
         process.stdout.write(t+" ");
         if(j==i-1)
         {
           temp=j+1+temp
         }
       }
     console.log();
   }*/

// Question-8

/*temp=0
for(let i=0;i<n;i++)
   {
     for (let j=0;j<2*i+1;j++)
       {
         let t=(temp+j+1).toString();
         if(temp+j+1<10)
         {
          process.stdout.write(t+" "); 
         }
         else
         {
           break;
         }
         if(j==2*i)
         {
           temp=j+1+temp
         }
       }
     console.log();
   }*/

// Question-9

/*temp=0
for(let i=0;i<n;i++)
   {
     for (let j=temp+1;j>temp-i;j--)
       {
         let t=(j).toString();
         process.stdout.write(t+" ");
       }
     console.log();
     temp=temp+i+2
   }*/

// #Question-10

/*for(let i=1;i<n+1;i++)
{
  for(let j=1;j<i+1;j++)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  for(let j=i-1;j>0;j--)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// Question-11

/*for(let i=1;i<n+1;i++)
{
  for(let j=n;j>i-1;j--)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  for(let j=i;j<n+1;j++)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// Question=12

/*for(let i=n;i>0;i--)
{
  for(let j=2*n;j>2*i-1;j=j-2)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// Question-13

/*for(let i=0;i<n;i++)
{
  for(let j=0;j<i+1;j++)
    {
      let t=j*i.toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// Question-14

/*for(let i=0;i<n;i++)
{
  for(let j=0;j<i+1;j++)
    {
      let t=(i*2+1).toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// Question-15

/*for(let i=1;i<n+1;i++)
{
  for(let j=0;j<n-i;j++)
    {
      process.stdout.write("  ")
    }
  for(let j=1;j<i+1;j++)
    {
      let t=j.toString();
      process.stdout.write(t+" ")
    }
  console.log()
}*/

// QUestion-16

/*for(let i=0;i<n;i++)
{
  for(let j=0;j<n-i;j++)
    {
      process.stdout.write("  ")
    }
  for(let j=0;j<2*i+1;j++)
    {
      process.stdout.write("*"+" ")
    }
  console.log()
}*/

// Question-17

/*for(let i=n;i>0;i--)
{
  for(let j=0;j<n-i;j++)
    {
      process.stdout.write(" ")
    }
  for(let j=0;j<i;j++)
    {
      process.stdout.write("*"+" ")
    }
  console.log()
}*/

// Question-18

for(let i=0;i<n;i++)
{
  for(let j=0;j<i+1;j++)
    {
      process.stdout.write("* ")
    }
  console.log()
}