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
        public int assignments { get; set; }

        [Range(0, 100)]
        public int groupProject { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int exams { get; set; }

        [Range(0,100)]
        public int intex { get; set; }
    }
}
