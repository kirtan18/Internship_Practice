
echo "Hello world"
echo "This is our first shell script"
NAME[0]="A"
NAME[1]="B"
NAME[2]="C"
NAME[3]="D"
NAME[4]="E"
echo "First Method: ${NAME[*]}"
echo "Second Method: ${NAME[@]}"
Val=`expr 4 + 4`
echo "Total value :$Val"

a=0
while [ "$a" -lt 10 ]  # this is loop1
     do 
	b="$a"
	while [ "$b" -ge 0 ] #this is loop2
          do
		echo -n " $b "
		b=`expr $b - 1`
          done
	echo
	
	a=`expr $a + 1`
     done





