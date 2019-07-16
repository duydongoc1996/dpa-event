filename='pid.txt'
pid=4
while read line;
do $pid = $line;
done < $filename
forever stop $pid