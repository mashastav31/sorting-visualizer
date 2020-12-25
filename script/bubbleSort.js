function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#6b705c");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#463f3a");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#463f3a");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#463f3a");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#463f3a");//Height update
            }
            div_update(divs[j],div_sizes[j], "#8a817c");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#CB997E");//Color update
    }
    div_update(divs[0],div_sizes[0], "#6b705c");//Color update

    enable_buttons();
}