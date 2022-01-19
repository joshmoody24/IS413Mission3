using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IS413Mission3.Models
{
    public class GradeCalculator
    {
        [Range(0,100)]
        public byte assignments { get; set; }

        [Range(0, 100)]
        public byte groupProject { get; set; }

        [Range(0, 100)]
        public byte quizzes { get; set; }

        [Range(0, 100)]
        public byte exams { get; set; }

        [Range(0,100)]
        public byte intex { get; set; }
    }
}
