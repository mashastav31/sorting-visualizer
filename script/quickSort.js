function Quick()
{
    c_delay=0;

    quickSort(0,array_size-1);

    enable_buttons();
}

function quickPartition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"#6b705c");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"#6b705c");//Color update

                div_update(divs[i],div_sizes[i],"#463f3a");//Color update
                div_update(divs[j],div_sizes[j],"#463f3a");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"#463f3a");//Height update
                div_update(divs[j],div_sizes[j],"#463f3a");//Height update

                div_update(divs[i],div_sizes[i],"#8a817c");//Height update
                div_update(divs[j],div_sizes[j],"#8a817c");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"#463f3a");//Color update
    div_update(divs[i-1],div_sizes[i-1],"#463f3a");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"#463f3a");//Height update
    div_update(divs[i-1],div_sizes[i-1],"#463f3a");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"#CB997E");//Color update
    }

    return i-1;//return the position of the pivot
}

function quickSort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quickPartition (start, end ) ;     
        quickSort (start, piv_pos -1);//sorts the left side of pivot.
        quickSort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }