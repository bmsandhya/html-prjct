class sumneachnorpali
{
    static void sum(intno)
    {
        int sum=0;
        while(no!=0)
        {
            int rem=no%10;
            sum=sum+rem;
            no=no/10;
        }
        prime(sum);
    }

    static void prime(int no)
    {
        boolean flag=true;
        for(int i=2;i<no;i++)
        {
            if(no%i==0)
            {
                flag=false;
                break;
            }
        }
        if(flag)
        {
            System.out.println(no+" is a prime")
        }
    }
    public static void main(String[]args)
    {
        int[] arr={112,456,828,13631,4554};
        for(int i=0;i,arr.length;i++)
        {
          sum(arr[i]);
        }
    }
}