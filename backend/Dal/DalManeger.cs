using Dal.Api;
namespace Dal
{
    public class DalManager : IDal
    {
        public IUser User { get; }
        public IClient Client { get; }
        public IInvoice Invoice { get; }
        public IPayment Payment { get; }
        //public IEmailCampaign EmailCampaign { get; }
        public IProposal Proposal { get; }
        public ITransaction Transaction { get; }

        public DalManager(
            IUser user,
            IClient client,
            IInvoice invoice,
            IPayment payment,
            //IEmailCampaign emailCampaign,
            IProposal proposal,
            ITransaction transaction)
        {
            User = user;
            Client = client;
            Invoice = invoice;
            Payment = payment;
            //EmailCampaign = emailCampaign;
            Proposal = proposal;
            Transaction = transaction;
        }
    }
}
