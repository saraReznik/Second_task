using BL.Api;

namespace BL
{
    public class BLManager : IBL
    {
        public IBLUser User { get; }
        public IBLClient Client { get; }
        public IBLInvoice Invoice { get; }
        public IBLPayment Payment { get; }
        public IBLProposal Proposal { get; }
        public IBLTransaction Transaction { get; }
        public BLManager(
            IBLUser user,
            IBLClient client,
            IBLInvoice invoice,
            IBLPayment payment,
            IBLProposal proposal,
            IBLTransaction transaction)
        {
            User = user;
            Client = client;
            Invoice = invoice;
            Payment = payment;
            Proposal = proposal;
            Transaction = transaction;
        }
    }
}