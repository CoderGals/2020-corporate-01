using System;

namespace JobApplicationAPI.Common.Exceptions
{
    public class FlowException : Exception
    {
        public FlowException(string message) : base(message)
        {

        }
    }
}
