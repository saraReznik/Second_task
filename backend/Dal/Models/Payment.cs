﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public int UserId { get; set; }
        public int ClientId { get; set; }
        public int InvoiceId { get; set; }
        public DateTime PaymentDate { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; }
    }
}
