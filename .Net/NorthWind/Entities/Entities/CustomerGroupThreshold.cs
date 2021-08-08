using System;
using System.Collections.Generic;

#nullable disable

namespace Data
{
    public partial class CustomerGroupThreshold
    {
        public string CustomerGroupName { get; set; }
        public decimal? RangeBottom { get; set; }
        public decimal? RangeTop { get; set; }
    }
}
